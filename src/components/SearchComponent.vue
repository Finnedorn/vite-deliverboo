<template>
    <!-- searchbar  -->
    <section id="search-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="mb-2 fw-bold fs-1">Di che cosa hai voglia stasera?</h2>
                <h5 class="mb-3">Scopri tutte le nostre deliziose alternative</h5>
            </div>
            <div class="input-group mb-5">
                <span class="input-group-text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="search" id="searchbar" name="search" class="form-control" placeholder="Cerca una tipologia di piatto" v-model="searchValue" @keyup.enter="searchRestaurants()">
                <button class="btn" type="button" @click="searchRestaurants()">Cerca</button>
            </div>
            <div class="row mb-5">
                <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(type,index) in store.types">
                   <typeCardComponent :el="type" @click="selectRestaurants(type.name)"/> 
                </div>
            </div>
            <p v-if="this.searchValue" class="mb-3">Ci sono {{ this.store.selectedRestaurants.length }} risultati per {{ this.searchValue }}</p>
            <p v-if="this.selectedType">Ci sono {{ this.store.selectedRestaurants.length }} risultati per {{ this.selectedType }}</p>

            <div @v-if="this.store.selectedRestaurants" class="row mb-5">
                <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(restaurant) in this.store.selectedRestaurants">
                   <restaurantCardComponent :el="restaurant"/>
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
    methods:{
        searchRestaurants(){
            this.store.selectedRestaurants = [];
            this.selectedType = "";
          
            axios.get(store.apiUrl + "/types", { params: { name: this.searchValue} }).then((res) => {
            // console.log(res.data.results);
            for (let i = 0; i < res.data.results.length; i++) {
                for (let j = 0; j < res.data.results[i].restaurants.length; j++){
                    this.store.selectedRestaurants.push(res.data.results[i].restaurants[j]);
                }
            }
            });
            console.log(this.store.selectedRestaurants);
        },
        selectRestaurants(typeName){
            this.store.selectedRestaurants = [];
            this.searchValue = "";
            this.selectedType = typeName;
            axios.get(store.apiUrl + "/types", { params: { name: typeName } }).then((res) => {
            // console.log(res.data.results[0].restaurants);
            this.store.selectedRestaurants = res.data.results[0].restaurants;
            });
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#search-section {
    background-color: $color-primary;
    .input-group{
        span{
            border-radius: 20px 0 0 20px;
            background-color: $color-white;
            border: 0;
            color: $color-primary-hover;
        }
        button{
            border-radius: 0 20px 20px 0;
            background-color: $color-primary-hover;
            color: $color-white;
            font-weight: bold;
        }
        #searchbar{
            background-color: $color-white;
            border: 0;
            &:focus{
            box-shadow: 0px 0px 3px 1px $color-primary-hover;
            }
        }
        
    }
    
}


</style>