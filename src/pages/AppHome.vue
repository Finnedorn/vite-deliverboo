<template>
    <div class="main-container d-flex">
        <SidebarComponent class="sidebar-container h-100 flex-shrink-0 d-none d-lg-block"/>
        <div class="flex-grow-1 h-100 overflow-y-scroll">
            <HeroComponent />
            <SearchComponent @type-searcher ="getSearchedTypes"/>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import SidebarComponent from "@/components/SidebarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
    name: 'AppHome',
    components: {
        SidebarComponent,
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