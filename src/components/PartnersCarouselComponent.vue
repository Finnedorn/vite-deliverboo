<template>
    <!-- Partners carousel  -->
    <div class="container-fluid">
        <!-- first -->
        <Carousel class="py-3" :autoplay="1" :wrap-around="true" :itemsToShow="8" :transition="5000">
            <slide v-for="(food, index) in partnersFoodAlt" :key="index">
                <div class="img-wrapper overflow-hidden rounded-3">
                    <img :src=food.url :alt=food.name />
                </div>
            </slide>
        </Carousel>
        <!-- second -->
        <Carousel class="py-2 m-0 " :autoplay="1" :wrap-around="true" :itemsToShow="15" :transition="5000">
            <slide v-for="(food, index) in partnersBrand" :key="index">
                <div class="img-wrapper overflow-hidden rounded-3">
                    <img :src=food.url :alt=food.name />
                </div>
            </slide>
        </Carousel>
        <!-- third -->
        <Carousel class="py-3" :autoplay="1" :wrap-around="true" :itemsToShow="8" :transition="5000">
            <slide v-for="(food, index) in partnersFood" :key="index">
                <div class="img-wrapper overflow-hidden rounded-3">
                    <img :src=food.url :alt=food.name />
                </div>
            </slide>
        </Carousel>
    </div>
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
            partnersBrand: [
                {
                    name: 'food',
                    url: "/img/partner-ag.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-sb.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-kfc.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-mc.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-bk.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-road.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-piad.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-pk.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-oww.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-cala.jpg",
                }
            ],
            partnersFood: [
                {
                    name: 'food',
                    url: "/img/partner-feta.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-tortillas.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-gyoza.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-hamburger.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-hamon.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-poke.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-soba.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-sushi.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-thai.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-tikka.jpg",
                }
            ],
            partnersFoodAlt: [
                {
                    name: 'food',
                    url: "/img/partner-soba.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-thai.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-hamburger.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-tikka.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-poke.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-hamon.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-hamburger.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-gyoza.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-tortillas.jpg",
                },
                {
                    name: 'food',
                    url: "/img/partner-feta.jpg",
                }
            ],
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.container-fluid {
    padding: 0;
    .img-wrapper {
        margin-left: 20px;
        img {
            width: 100%;
        }
    }
}

</style>