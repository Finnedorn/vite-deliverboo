<template>
    <NavbarComponent />
    <main>
        <div class="container py-5">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="not-found-img-wrapper">
                    <img src="../assets/img/logo_food_yellow.png" alt="not found image">
                </div>
                <h2 class="fw-bold fs-1">Oops!</h2>
                <p class="fs-5 ">Non abbiamo trovato ciò che stai cercando.</p>
                <div class="w-50 mb-5 rounded-4 overflow-hidden">
                    <img src="../assets/img/sad-dish.jpg" alt="not found image">
                </div>
                <router-link :to="{ name: 'home' }" class="text-white">
                    <button class="btn btn-tertiary-color">Torna alla home</button>
                </router-link>
            </div>
        </div>
        <img class="img-wave" src="../assets/img/wave-white.png" alt="wave-bg">

    </main>
</template>
  
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
    name: 'NotFound',
    components: {
        NavbarComponent,
    },
    data() {
        return {
        };
    },
    methods: {
    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

main{
    background-color: $color-primary;
}
.not-found-img-wrapper {
    width: 100px;
}
</style>