<template>
    <!-- hero  -->
    <div id="hero" class="overflow-hidden">
        <div class="container-fluid pb-5">
            <div class="text-wrapper container py-5 mb-4">
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
        <div class="hero-img-alt d-block d-xxl-none">
            <img src="../assets/img/hero-dumplings-def.png" alt="hero-dumplings-demo">
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

    .hero-img-alt {
        width: 700px;
        position: absolute;
        right: 60px;
        bottom: -180px;
        z-index: 1;
        rotate: 90deg;
        animation: rotating 100s linear infinite;

        @keyframes rotating {
            from {
                -ms-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -webkit-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
            }

            to {
                -ms-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                -o-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    }

    .yellow-wave-wrapper {
        position: relative;
        bottom: -2px;
        z-index: 100;
    }
}

@media screen and (max-width: 1199px) {

    #hero {
        .hero-img-alt {
            right: 40px;
        }
    }
}

@media screen and (max-width: 991px) {

    #hero {
        .hero-img-alt {
            width: 1000px;
            right: -500px;
            bottom: -180px;
        }
    }
    
}

@media screen and (max-width: 767px) {

    #hero {
        .text-wrapper {
            padding: 0;
            text-align: center;

            h1 {
                padding-bottom: 20px !important;
            }

            p {
                padding-bottom: 80px !important;
            }
        }

        .hero-img-alt {
            width: 500px;
            right: 90px;
            bottom: -270px;
        }
    }
}

@media screen and (max-width: 575px) {

    #hero {
        .text-wrapper {
            padding: 0;
            text-align: center;

            h1 {
                padding-bottom: 20px !important;
            }

            p {
                padding-bottom: 80px !important;
            }
        }

        .hero-img-alt {
            width: 500px;
            right: 10px;
            bottom: -270px;
        }
    }
}</style>