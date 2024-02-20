<template>
    <footer>
        <div class="copyright pb-4">
            <p class="text-center">Copyright © 2024 DeliveBoo</p>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: "FooterComponent",
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

footer {
    .copyright{
    background-color: $color-bg-primary;

        color: $color-secondary;
        font-weight: bold;
        font-size: 1.2rem;
        padding-top: 35px;
    }
}


</style>