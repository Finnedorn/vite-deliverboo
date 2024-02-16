<template>
    <div class="card overflow-hidden">
      <img :src="store.imagePath + el.image" :alt="el.name" />
        <h5>{{ el.name }}</h5>
      </div>
  </template>
  
  <script>
  import { store } from "../data/store";
  
  export default {
    name: "typeCardComponent",
    props: ["el"],
    data() {
      return {
        store,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;
  
  .card {
    height: 150px;
    border: 0 !important;
    border-radius: 0 !important;
    position: relative;
    background-color: $color-secondary;
    h5 {
        position: absolute;
        bottom: 5px;
        right: 10px;
        color: $color-white;
        font-weight: bold;
    }
    img{
        position: relative;
        left: -100px;
        top: -50px;
    }

  }
  </style>