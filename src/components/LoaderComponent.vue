<template>
    <div class="container-fluid loader d-flex justify-content-center align-items-center">
        <div class="loader-wrapper d-flex justify-content-center align-items-center m-auto">
            <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo-loader">
        </div>
    </div>
</template>
  
<script>
export default {
    name: "LoaderComponent",
    data() {
        return {
        }
    },
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.loader {
    width: 100%;
    height: 100%;
    background-color: $color-white;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1500;

    .loader-wrapper {

        width: 500px;


        img {
        width: 100%;
        animation: loading 2s linear infinite;

        @keyframes loading {
            0% {
                opacity: 1;
            }

            50% {
                opacity: 0.5;
                transform: scale(1.1);
            }

            100% {
                opacity: 1;
            }
        }
    }
        
    }

   

}
</style>