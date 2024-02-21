<template>
    <!-- searchbar  -->
    <div class="yellow-wave-wrapper">
        <img src="../assets/img/wave-yellow.png" alt="yellow-wave">
    </div>
    <section id="search-section">

        <div class="container">
            <div class="text-center mb-5">
                <h2 class="mb-3 fw-bold search-title">Di che cosa hai voglia <br> stasera?</h2>
                <h5 class="mb-3 fs-2">Scopri tutte le nostre deliziose alternative</h5>
            </div>
            <!-- searchbar -->
            <div class="input-group mb-4 p-3 p-lg-5 ">
                <span class="input-group-text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input v-model.trim="searchValue" type="text" id="searchbar" name="search" class="form-control"
                    placeholder="Cerca un ristorante per nome" @keyup.enter="searchNameRestaurant()">
                <button class="btn" type="button" @click="searchNameRestaurant()">Cerca</button>
            </div>

            <!-- card types -->
            <!-- <div class="row mb-5 ">
                <div class="col-12 col-lg-4 col-xl-3 mb-3 " v-for="(type, index) in store.types">
                    <div class="card-type-container">
                        <typeCardComponent :el="type" @click="selectRestaurants(type, index)" />
                    </div>
                </div>
            </div> -->

            <!-- card slider -->
            <div class="d-none d-xl-block">
                <div class="d-flex justify-content-between py-5">
                    <CardSliderComponent class="card-slider" v-for="(type, index) in store.types" :icon="type.name"
                        :title="type.name" :image="type.image" @selectRestaurant="selectRestaurants(type, index)" />
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-center  d-xl-none pb-5">
                <div class="m-1 p-2 type-badge" v-for="(type, index) in store.types"
                    @click="selectRestaurants(type, index)">
                    {{ type.name }}
                </div>
            </div>
            <!-- loader -->
            <div v-if="this.loader" class="py-5">
                <div class="container-fluid loader d-flex justify-content-center align-items-center">
                    <div class="loader-wrapper">
                        <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo-loader">
                    </div>
                </div>
            </div>
            <div v-else>
                <!-- card results -->
                <p v-if="this.store.selectedRestaurants.length > 0 && this.selectedType && !this.loader || this.store.selectedRestaurants.length > 0 && this.searchValue && !this.loader"
                    class="mb-3 text-center fs-4 pb-3">
                    Abbiamo trovato
                    <span class="fw-bold">{{ this.store.selectedRestaurants.length }}</span>
                    <span v-if="this.store.selectedRestaurants.length > 1"> risultati</span>
                    <span v-else> risultato</span>
                    in base alla tua ricerca
                </p>
                <p class="mb-3 text-center fs-4 "
                    v-if="this.store.selectedRestaurants.length === 0 && this.selectedType && this.store.dataLoading && !this.loader || this.store.selectedRestaurants.length === 0 && this.searchValue && !this.loader">
                    Non sono stati trovati risultati
                </p>
                <!-- <p v-else v-show="this.store.selectedRestaurants.length > 0 && !this.searchValue">Ci sono {{
                            this.store.selectedRestaurants.length }}
                            risultati
                        </p>  -->
                <div @v-if="this.store.selectedRestaurants" class="row mb-5">
                    <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(restaurant) in this.store.selectedRestaurants">
                        <div class="selected">
                            <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">
                                <restaurantCardComponent :el="restaurant" />
                            </router-link>
                        </div>
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
import CardSliderComponent from "./CardSliderComponent.vue";
export default {
    name: "SearchComponent",
    components: {
        typeCardComponent,
        restaurantCardComponent,
        CardSliderComponent,
    },
    data() {
        return {
            store,
            searchValue: "",
            selectedType: [],
            loader: false,
        };
    },
    methods: {
        searchNameRestaurant() {
            this.loader = true;
            // resettare i valori della multiselected
            let typeEl = document.querySelectorAll('.card-slider');
            for (let i = 0; i < typeEl.length; i++) {
                typeEl[i].classList.remove('selected-type');
            }
            this.selectedType = [];
            this.store.selectedRestaurants = [];
            let restaurantName = this.searchValue;
            axios.get(store.apiUrl + "/restaurants", { params: { search: restaurantName } }).then((res) => {
                // console.log(res.data.results);
                this.store.selectedRestaurants = res.data.results;
            });
            this.loader = false;
        },
        searchRestaurants() {
            this.loader = true;
            // resettare i valori della multiselected
            let typeEl = document.querySelectorAll('.card-slider');
            for (let i = 0; i < typeEl.length; i++) {
                typeEl[i].classList.remove('selected-type');
            }
            this.selectedType = [];

            this.store.dataLoading = false;
            this.store.selectedRestaurants = [];
            if (!this.searchValue) {
                this.loader = false;
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
            // console.log(this.store.selectedRestaurants);
            this.store.dataLoading = true;
            this.loader = false;
        },
        selectRestaurants(type, i) {
            this.loader = true;
            // resettare i valori della searchbar
            this.searchValue = '';

            this.store.dataLoading = true;
            let typeBadge = document.querySelectorAll('.type-badge')[i];
            let typeEl = document.querySelectorAll('.card-slider')[i];
            if (this.selectedType.includes(type.id)) {
                this.selectedType.splice(this.selectedType.indexOf(type.id), 1);
                typeEl.classList.remove('selected-type');
                typeBadge.classList.remove('selected-type');

            } else {
                this.selectedType.push(type.id);
                typeEl.classList.add('selected-type');
                typeBadge.classList.add('selected-type');

                this.loader = false;




            }

            if (this.selectedType.length > 0) {
                console.log(JSON.parse(JSON.stringify(this.selectedType)));
                let typeList = JSON.parse(JSON.stringify(this.selectedType));
                axios.get(store.apiUrl + "/restaurants", { params: { types: typeList } }).then((res) => {
                    console.log(res.data.results);

                    this.store.selectedRestaurants = res.data.results;
                    this.loader = false;
                });
            } else {
                this.store.selectedRestaurants = '';
                this.store.dataLoading = false;
                this.loader = false;
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

.yellow-wave-wrapper {
    transform: rotate(180deg);
}

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

.card-type-container {
    border-radius: 1rem;
    overflow: hidden;

    // &:hover {
    //     transition: all 0.3s;
    //     filter: brightness(105%);
    //     transform: scale(1.02);
    //     cursor: pointer;
    // }

}

.selected-type {
    -webkit-box-shadow: 0px 0px 0px 4px $color-tertiary;
    box-shadow: 0px 0px 0px 4px $color-tertiary;

}

.card-slider {
    background-color: $color-secondary;

    &:nth-child(3n) {
        background-color: $color-primary-hover;
    }

    &:nth-child(3n-1) {
        background-color: $color-primary;
    }
}

.type-badge {
    background-color: $color-secondary;
    text-align: center;
    border-radius: 10px;
    color: $color-white;
    font-weight: bold;

    &:hover {
        transition: all 0.3s;
        filter: brightness(105%);
        transform: scale(1.02);
        cursor: pointer;
    }

    &:nth-child(3n) {
        background-color: $color-primary-hover;
    }

    &:nth-child(3n-1) {
        background-color: $color-primary;
    }
}

.loader-wrapper {
    width: 200px;

    img {
        width: 100%;
        animation: loader 2s linear infinite;

        @keyframes loader {
            0% {
                opacity: 1;
            }

            50% {
                opacity: 0.5;
                transform: scale(1.1);
            }

            100% {
                opacity: 1;
            }
        }
    }

}</style>