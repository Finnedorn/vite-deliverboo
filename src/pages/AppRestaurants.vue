<template>
    <h1>
        La pagina dei ristoranti 
    </h1>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
export default {
    name: 'AppRestaurants',
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