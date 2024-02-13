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
@use "../styles/partials/variables" as *;

#hero {
    width: 100%;
    height: 1000px;
    background-color: $color-bg-primary;
    .container {
        position: relative;
        height: 100%;
    }
}
</style>