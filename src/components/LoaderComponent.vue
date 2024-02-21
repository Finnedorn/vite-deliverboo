<template>
    <div class="container-fluid">
        <div class="loader-wrapper d-flex justify-content-center align-items-center m-auto">
            <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo-loader">
        </div>
    </div>
</template>
  
<script>
export default {
    name: "LoaderComponent",
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.loader-wrapper {
    width: 150px;

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

</style>