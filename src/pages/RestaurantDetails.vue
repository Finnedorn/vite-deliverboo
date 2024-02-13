<template>
    <h1>
        Pagina del singolo ristorante
    </h1>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
export default {
    name: 'RestaurantDetails',
    components: {
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