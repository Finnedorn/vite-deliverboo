<template>
    <!-- Hero carousel  -->
    <Carousel :autoplay="4000" :wrap-around="true" :itemsToShow="1">
        <slide id="slide" v-for="(food,index) in heroFoods" :key="index">
            <img  :src=food.url :alt=food.name />
        </slide>
    </Carousel>
</template>
  
<script>
import { store } from "../data/store.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
    name: "HeroCarouselComponent",
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            store,
            heroFoods: [
                {
                    name: 'poke-hero',
                    url: "/img/hero-poke.png",
                },
                {
                    name: 'wings-hero',
                    url: "/img/hero-wings.png",
                },
                {
                    name: 'hamburger-hero',
                    url: "/img/hero-hamburger.png",
                },
                {
                    name: 'kebab-hero',
                    url: "/img/hero-kebab.png",
                },
                {
                    name: 'dumplings-hero',
                    url: "/img/hero-dumplings.png",
                }
            ],
            settings: {
                itemsToShow: 1,
            }
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#slide {
    rotate: -90deg;
    img {
        margin-top: 200px;
        width: 1000px;
        animation: food-hero 15s linear infinite;
        @keyframes food-hero {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    }
}
</style>