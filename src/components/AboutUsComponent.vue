<template>
    <!-- About Us  -->
    <div class="container-fluid green-wave-wrapper">
        <img src="../assets/img/wave-green.png" alt="wave-green">
    </div>
    <div class="container-fluid about-us-wrapper pb-5">
        <div class="text-center mb-5 pt-3">
        </div>
    </div>
</template>
  
<script>
export default {
    name: "AboutUsComponent",
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.partners-wrapper {
    background-color: $color-primary;
    height: 300px;

    .search-title {
        font-size: 5.5rem;
    }
}

</style>