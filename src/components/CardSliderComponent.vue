<template>
    <div class="card-slider d-flex align-items-end" @click="$emit('selectRestaurant')">
        <div class="row d-flex flex-nowrap">
            <div class="food-wrapper">
                <img :src="store.imagePath + image" :alt=title>
            </div>
            <div class="fs-3 fw-bold icon d-flex justify-content-center  align-items-center ">{{ icon }}</div>
            <div class="description">
                <h2 class="fw-bold text-light">{{ title }}</h2>
            </div>
        </div>
    </div>
</template>
  
<script>
import { store } from "../data/store.js";
export default {
    props: {
        icon: String,
        title: String,
        image: String
    },
    name: "CardSliderComponent",
    data() {
        return {
            store,
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.card-slider {
    background-color: $color-primary-hover;
    width: 60px;
    border-radius: 1rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    transition: .6s cubic-bezier(.28, -0.03, 0, .99);
}

.card-slider>.row {
    position: relative;
}


.card-slider>.row>.icon {
    color: $color-white;
    width: 50px;
    margin: 15px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    z-index: 103;

}

.card-slider>.row>.description {
    height: 300px;
    width: 300px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    transition: all 0.3s ease;
    z-index: 103;
    position: relative;
}

.card-slider>.row>.description>h2 {
    position: absolute;
    font-size: 2.5rem;
    bottom: 40px;
    right: 100px;
}

.description p {
    color: $color-tertiary;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}

.food-wrapper {
    width: 350px;
    z-index: 100;
    top: -100px;
    left: -100px;
    position: absolute;
    display: none;
}

.card-slider:hover {
    width: 400px;
}

.card-slider:hover .food-wrapper {
    display: block;
    transition: all 0.5s;
}

.card-slider:hover .icon {
    opacity: 0 !important;
    transition: all 0.5s;
}

.card-slider:hover .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
</style>