<template>
   <div class="card h-100 overflow-hidden">
    <img :src="store.imagePath + el.image" :alt="el.name" class="card-img-top" />
    <div class="card-body">
      <h4 class="fw-bold">{{ el.name }}</h4>
      <h6 class="restaurant-address">{{ el.address }}</h6>
    </div>
  </div>
  </template>
  
  <script>
  import { store } from "../data/store";
  
  export default {
    name: "restaurantCardComponent",
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
    border: 0 !important;
    img {
      aspect-ratio: 3/2;
      width: 100%;
      height: 100%;
      object-fit: cover;
    
    }


    &:hover {
      transition: all 0.3s;
      filter: brightness(110%);
      transform: scale(1.02);
      cursor: pointer;
    }
  }
  .restaurant-address{
    font-size: 0.9em;
  }
  </style>