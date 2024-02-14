<template>
    <!-- searchbar  -->
    <section id="search-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="mb-2 fw-bold fs-1">Di che cosa hai voglia stasera?</h2>
                <h5 class="mb-3">Scopri tutte le nostre deliziose alternative</h5>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="search" id="searchbar" name="search" class="form-control" placeholder="Cerca una tipologia di piatto" v-model="searchedTypes" @keyup="$emit('TypeSearcher', searchedTypes)">
                <button class="btn" type="button" @click="$emit('TypeSearcher', searchedTypes)">Cerca</button>
            </div>
            <div class="row">
                <div class="col-12 col-lg-4 col-xl-3 mb-3" v-for="(type) in store.types">
                   <TypeCardComponent :el="type"/> 
                </div>
            </div>
                
        </div>
    </section>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import typeCardComponent from "./typeCardComponent.vue";
import TypeCardComponent from "./typeCardComponent.vue";
export default {
    name: "SearchComponent",
    components: {
    typeCardComponent,
    TypeCardComponent
},
    data() {
        return {
            store,
            searchedTypes: "",
        };
    },
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