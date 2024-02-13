<template>
    <NavbarComponent />
    <HeroComponent />
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
export default {
    name: 'AppHome',
    components: {
        NavbarComponent,
        HeroComponent
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
</style>