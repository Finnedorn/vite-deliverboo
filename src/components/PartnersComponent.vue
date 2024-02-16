<template>
    <!-- Join our partners  -->
    <div class="container-fluid partners-wrapper pb-5">
        <div class="text-center mb-5 pt-3">
            <h2 class="mb-3 fw-bold search-title">Unisciti a più di 100 ristoratori</h2>
            <h5 class="mb-3 fs-2">Entra a far parte della nostra famiglia</h5>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "PartnersComponent",
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