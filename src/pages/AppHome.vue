<template>
    <NavbarComponent />
    <HeroComponent />
    <SearchbarComponent @type-searcher ="getSearchedTypes"/>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import SearchbarComponent from "@/components/SearchbarComponent.vue";
export default {
    name: 'AppHome',
    components: {
        NavbarComponent,
        HeroComponent,
        SearchbarComponent
    },
    data() {
        return {
            store
        };
    },
    methods: {
        // cerco per tipo e sotto ho i ristoranti di quel tipo
        getSearchedTypes(types) {
            console.log(types);
            // axios.get(store.ApiUrl + "type/" + types)
        }
    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
// @use "./assets/style/partials/variables" as *;
</style>