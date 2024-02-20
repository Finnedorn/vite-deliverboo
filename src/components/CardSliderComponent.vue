<template>
    <div class="card-slider d-flex align-items-end" @click="$emit('selectRestaurant')">
        <div class="row d-flex flex-nowrap">
            <div class="food-wrapper">
                <img :src="store.imagePath + Image" :alt=title>
            </div>
            <div class="fs-3 fw-bold icon d-flex justify-content-center  align-items-center ">{{ icon }}</div>
            <div class="description pb-5  d-flex  justify-content-center  flex-column  overflow-hidden text-end">
                <h3 class="fs-2 fw-bold text-light pb-3">{{ title }}</h3>
                <p class="text-light w-50 text-end align-self-end">
                    Lorem ipsum dolor sit amet.
                </p>
                <button class=" align-self-end  btn btn-primary fw-bold fs-5 text-light">
                    Cerca
                </button>
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
        Image: String
    },
    name: "CardSliderComponent",
    data() {
        return {
            store,
        }
    },

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
    box-shadow: 3px 1px 20px 0px rgba(0, 0, 0, 0.442);
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
    width: 310px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    transition: all 0.3s ease;
    z-index: 103;
}

.description p {
    color: $color-tertiary;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}

.food-wrapper {
    width: 380px;
    z-index: 100;
    left: -150px;
    top: -20px;

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