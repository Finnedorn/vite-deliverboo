<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./data/store.js";
export default {
  name: 'App',
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
