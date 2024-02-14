<template>
  <SidebarComponent />
  <router-view :key="$route.path"></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./data/store.js";
import SidebarComponent from "./components/SidebarComponent.vue";
export default {
  name: 'App',
  components: {
    SidebarComponent
  },
  data() {
    return {
      store
    };
  },
  methods: {
    allTypes() {
      axios.get(store.apiUrl + "/types").then((res) => {
        console.log(res.data.results);
        this.store.types = res.data.results;
      });
    },
  },
  mounted() {
    this.allTypes();
  }
}
</script>

<style lang="scss" scoped>
// @use "./assets/style/partials/variables" as *;
</style>
