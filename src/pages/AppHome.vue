<template>
    <h1>
        paginina
    </h1>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
export default {
    name: 'AppHome',
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