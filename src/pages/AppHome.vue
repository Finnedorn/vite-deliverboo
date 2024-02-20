<template>
    <NavbarComponent />
    <HeroComponent />
    <PartnersComponent />
    <SearchComponent @type-searcher ="getSearchedTypes"/>
    <AboutUsComponent />
    <FooterComponent />
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import PartnersComponent from "@/components/PartnersComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import AboutUsComponent from "@/components/AboutUsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
    name: 'AppHome',
    components: {
        NavbarComponent,
        HeroComponent,
        PartnersComponent,
        SearchComponent,
        AboutUsComponent,
        FooterComponent
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

.main-container {
    height: 100vh;

    .sidebar-container {
        width: 250px;
    }

    // .main-content {
    //     width: calc(100% - 250px);
    // }
}

</style>