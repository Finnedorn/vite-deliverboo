<template>
    <!-- hero  -->
    <div id="hero">
        <div class="container">
            <div></div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "HeroComponent",
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#hero {
    width: 100%;
    height: 700px;
    background-color: $color-bg-primary;
    .container {
        position: relative;
        height: 100%;
    }
}

</style>