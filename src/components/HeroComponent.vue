<template>
    <!-- hero  -->
    <div id="hero" class="overflow-hidden">
        <div class="container-fluid pb-5">
            <div class="container py-5 mb-4">
                <div class="row">
                    <h1 class="py-5 col-12 ">I piatti dei ristoranti che ami, <br> a domicilio</h1>
                    <p class="col-12 col-md-4">Trova le cucine più amate dai ristoranti nella tua zona e ordina online a
                        domicilio, il tutto consegnato in pochissimo tempo.</p>
                </div>
            </div>
        </div>
        <div class=" yellow-wave-wrapper">
            <img src="../assets/img/wave-yellow.png" alt="yellow-wave">
        </div>
        <div class="hero-img d-none d-xxl-block">
            <!-- <img src="../assets/img/sushi-hero.png" alt="sushi-hero"> -->
            <HeroCarouselComponent />
        </div>
    </div>
</template>
  
<script>
import HeroCarouselComponent from './HeroCarouselComponent.vue';
export default {
    name: "HeroComponent",
    components: {
        HeroCarouselComponent,
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#hero {
    width: 100%;
    // height: 700px;
    background-color: $color-bg-primary;
    position: relative;

    .container {
        position: relative;
        height: 100%;

        h1 {
            color: $color-secondary;
            font-size: 4.5em;
            font-weight: bold;
        }

        p {
            font-size: 1.8em;
        }
        z-index: 100;
    }

    .hero-img {
        width: 1300px;
        height: 800px;
        position: absolute;
        right: -300px;
        top: 200px;
        z-index: 1;
        rotate: 90deg;

    }

    .yellow-wave-wrapper {
        position: relative;
        bottom: -2px;
        z-index: 100;
    }
}
</style>