<template>
    <HeroComponent />
    <SearchComponent @type-searcher ="getSearchedTypes"/>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import HeroComponent from "@/components/HeroComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
    name: 'AppHome',
    components: {
        HeroComponent,
        SearchComponent,
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