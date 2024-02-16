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
                <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(type, index) in store.types">
                    <typeCardComponent :el="type" @click="selectRestaurants(type.name)" />
                </div>
            </div>
            <p v-if="this.store.selectedRestaurants.length > 0 && this.selectedType || this.store.selectedRestaurants.length > 0  && this.searchValue" class="mb-3 text-center fs-4 ">Abbiamo trovato <span class="fw-bold">{{ this.store.selectedRestaurants.length }}</span> risultati in base alla tua ricerca</p> 
            <p class="mb-3 text-center fs-4 " v-if="this.store.selectedRestaurants.length === 0 && this.selectedType && !this.store.dataLoading">Non sono stati trovati risultati</p>
            <!-- <p v-else v-show="this.store.selectedRestaurants.length > 0 && !this.searchValue">Ci sono {{
                this.store.selectedRestaurants.length }}
                risultati</p>  -->
            <div @v-if="this.store.selectedRestaurants" class="row mb-5">
                <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(restaurant) in this.store.selectedRestaurants">
                    <restaurantCardComponent :el="restaurant" />
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
            selectedType: "",

        };
    },
    methods: {
        searchRestaurants() {
            this.store.dataLoading = true;
            this.store.selectedRestaurants = [];
            if (!this.searchValue) {
                return
            }
            this.selectedType = "";

            axios.get(store.apiUrl + "/types", { params: { name: this.searchValue } }).then((res) => {
                // console.log(res.data.results);
                for (let i = 0; i < res.data.results.length; i++) {
                    for (let j = 0; j < res.data.results[i].restaurants.length; j++) {
                        this.store.selectedRestaurants.push(res.data.results[i].restaurants[j]);
                    }
                }
            });
            console.log(this.store.selectedRestaurants);
            this.store.dataLoading = false;
        },
        selectRestaurants(typeName) {
            this.store.dataLoading = true;

            this.store.selectedRestaurants = [];
            this.searchValue = "";
            this.selectedType = typeName;
            axios.get(store.apiUrl + "/types", { params: { name: typeName } }).then((res) => {
                // console.log(res.data.results[0].restaurants);
                this.store.selectedRestaurants = res.data.results[0].restaurants;
            });
            this.store.dataLoading = false;

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
</style>