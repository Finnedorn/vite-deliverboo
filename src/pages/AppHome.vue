<template>
    <NavbarComponent />
    <HeroComponent />
    <PartnersComponent />
    <SearchComponent />
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
}

</style>