<template>
    <!-- Partners carousel  -->
    <!-- first -->
    <Carousel :autoplay="4000" :wrap-around="true" :itemsToShow="1">
        <slide id="slide" v-for="(food,index) in heroFoods" :key="index">
            <img  :src=food.url :alt=food.name />
        </slide>
    </Carousel>
    <!-- second -->
</template>
  
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
    name: "PartnersCarouselComponent",
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            partnersFirst: [
                {
                    name: 'wings',
                    url: "/img/partner-wings.png",
                }
            ]
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;


</style>