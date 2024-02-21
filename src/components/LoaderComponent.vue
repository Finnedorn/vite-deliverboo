<template>
    <div class="container-fluid">
        <div class="loader-wrapper d-flex justify-content-center align-items-center">
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
    width: 300px;

    img {
        width: 100%;
        animation: loading 3s linear infinite;
        @keyframes loading {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0.5;
                transform: scale(2);
            }
        }
    }
}

</style>