<template>
    <!-- Partners carousel  -->
    <!-- first -->
    <Carousel :autoplay="1"  :wrap-around="true" :itemsToShow="12" :slidesCount="1" :transition="5000">
        <slide  v-for="(food,index) in partnersFirst" :key="index">
            <div class="overflow-hidden rounded-3 mx-1">
                <img :src=food.url :alt=food.name />
            </div>
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
                    name: 'food',
                    url: "/img/partner-ag",
                },
                {
                    name: 'food',
                    url: "/img/partner-kfc",
                },
                {
                    name: 'food',
                    url: "/img/partner-tortillas",
                },
                {
                    name: 'food',
                    url: "/img/partner-mc",
                },
                {
                    name: 'food',
                    url: "/img/partner-soba",
                },
                {
                    name: 'food',
                    url: "/img/partner-tikka",
                },
                {
                    name: 'food',
                    url: "/img/partner-bk",
                },
            ]
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;


</style>