<template>
    <!-- searchbar  -->
    <section id="search-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="mb-3 fw-bold search-title">Di che cosa hai voglia <br> stasera?</h2>
                <h5 class="mb-3 fs-2">Scopri tutte le nostre deliziose alternative</h5>
            </div>
            <div class="input-group mb-5 p-5">
                <span class="input-group-text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input v-model.trim="searchValue" type="text" id="searchbar" name="search" class="form-control"
                    placeholder="Cerca una tipologia di piatto" @keyup.enter="searchRestaurants()">
                <button class="btn" type="button" @click="searchRestaurants()">Cerca</button>
            </div>

            <div class="row mb-5">
                <div class="col-12 col-lg-4 col-xl-3 mb-3 " v-for="(type, index) in store.types">
                    <div class="card_type_container">
                        <typeCardComponent  :el="type" @click="selectRestaurants(type, index)" />
                    </div>
                </div>
            </div>
            
           <p v-if="this.store.selectedRestaurants.length > 0 && this.selectedType || this.store.selectedRestaurants.length > 0  && this.searchValue"
                class="mb-3 text-center fs-4 ">
                Abbiamo trovato 
                <span class="fw-bold">{{ this.store.selectedRestaurants.length }}</span>
                <span v-if="this.store.selectedRestaurants.length > 1"> risultati</span> 
                <span v-else> risultato</span> 
                in base alla tua ricerca
            </p> 

         <p  class="mb-3 text-center fs-4 " v-if="this.store.selectedRestaurants.length === 0 && this.selectedType && this.store.dataLoading">Non sono stati trovati risultati</p>

            <!-- <p v-else v-show="this.store.selectedRestaurants.length > 0 && !this.searchValue">Ci sono {{
                this.store.selectedRestaurants.length }}
                risultati</p>  -->
            <div @v-if="this.store.selectedRestaurants" class="row mb-5">
                <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(restaurant) in this.store.selectedRestaurants">
                    <div class="selected">
                        <router-link :to="{ name:'single-restaurant', params: { slug: restaurant.slug } }">
                            <restaurantCardComponent :el="restaurant" />
                        </router-link>
                    </div>
                    
                </div>

            </div>

        </div>
    </section>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import typeCardComponent from "./typeCardComponent.vue";
import restaurantCardComponent from "./restaurantCardComponent.vue";
export default {
    name: "SearchComponent",
    components: {
        typeCardComponent,
        restaurantCardComponent
    },
    data() {
        return {
            store,
            searchValue: "",
            selectedType: [],


        };
    },
    methods: {
        searchRestaurants() {
            // resettare i valori della multiselected
            let typeEl = document.querySelectorAll('.card_type_container');
            for (let i = 0; i < typeEl.length; i ++) {
                typeEl[i].classList.remove('selected_type');
            }
            this.selectedType = [];

            this.store.dataLoading = false;
            this.store.selectedRestaurants = [];
            if (!this.searchValue) {
                return
            }
            // this.selectedType = "";

            axios.get(store.apiUrl + "/types", { params: { name: this.searchValue } }).then((res) => {
                // console.log(res.data.results);
                for (let i = 0; i < res.data.results.length; i++) {
                    for (let j = 0; j < res.data.results[i].restaurants.length; j++) {
                        this.store.selectedRestaurants.push(res.data.results[i].restaurants[j]);
                    }
                }
            });
            console.log(this.store.selectedRestaurants);
            this.store.dataLoading = true;
        },
        selectRestaurants(type, i) {
            // resettare i valori della searchbar
            this.searchValue = '';

            this.store.dataLoading = true;
            let typeEl = document.querySelectorAll('.card_type_container')[i];
            if (this.selectedType.includes(type.id)) {
                this.selectedType.splice(this.selectedType.indexOf(type.id) , 1);
                typeEl.classList.remove('selected_type');
                
            } else {
                this.selectedType.push(type.id);
                typeEl.classList.add('selected_type');

            }

            if (this.selectedType.length > 0) {
                console.log(JSON.parse(JSON.stringify(this.selectedType)));
                let typeList = JSON.parse(JSON.stringify(this.selectedType));
                axios.get(store.apiUrl + "/restaurants", { params: { types: typeList } }).then((res) => {
                    console.log(res.data.results);
    
                    this.store.selectedRestaurants = res.data.results;
    
                });
            } else {
                this.store.selectedRestaurants = '';
                this.store.dataLoading = false;
            }

            
            // this.store.dataLoading = true;

            // this.store.selectedRestaurants = [];
            // this.searchValue = "";
            // this.selectedType = typeName;
            // axios.get(store.apiUrl + "/types", { params: { name: typeName } }).then((res) => {
            //     // console.log(res.data.results[0].restaurants);
            //     this.store.selectedRestaurants = res.data.results[0].restaurants;
            // });
            // this.store.dataLoading = false;

        },

    },
    mounted() {

    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#search-section {
    background-color: $color-white;

    .search-title {
        font-size: 5rem;
    }

    .input-group {
        background-color: $color-primary;
        border-radius: 100px;

        span {
            border-radius: 20px 0 0 20px;
            background-color: $color-white;
            border: 0;
            color: $color-primary-hover;
        }

        button {
            border-radius: 0 20px 20px 0;
            background-color: $color-primary-hover;
            color: $color-white;
            font-weight: bold;
        }

        #searchbar {
            background-color: $color-white;
            border: 0;

            &:focus {
                box-shadow: 0px 0px 3px 1px $color-primary-hover;
            }
        }

    }

}
.card_type_container {
    border-radius: 1rem;
    overflow: hidden;
    
    &:hover {
    transition: all 0.3s;
    filter: brightness(105%);
    transform: scale(1.02);
    cursor: pointer;
    }

}

.selected_type {
    -webkit-box-shadow: 0px 0px 0px 4px $color-tertiary; 
box-shadow: 0px 0px 0px 4px $color-tertiary;

}
</style>