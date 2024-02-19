<template>
  <div class="card h-100 overflow-hidden">
    <img :src="store.imagePath + el.image" :alt="el.name" class="card-img-top" />
    <div class="card-body p-2">
      <h4 class="fw-bold">{{ el.name }}</h4>

      <span v-for="(type) in el.types" class="badge bg-warning me-2 mb-2">{{ type.name }}</span>
      <p class="restaurant-address">{{ el.address }}</p>

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
  box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.4);

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

.restaurant-address {
  font-size: 0.9em;
}



.restaurant-address {
  font-size: 0.8em;
}
</style>

