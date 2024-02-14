<template>
    <!-- hero  -->
    <div id="hero">
        <div class="container-fluid pb-5">
            <div class="container py-5">
                <div class="row">
                    <h1 class="py-5 col-12">I piatti dei ristoranti che ami, <br> a domicilio</h1>
                    <p class="col-12 col-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum, ea ullam reprehenderit nesciunt, ipsam.</p>
                </div>
            
            </div>
            <div class="hero-img">
                <img src="../assets/img/sushi-hero.png" alt="sushi-hero">
            </div>
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
    // height: 700px;
    background-color: $color-bg-primary;
    position: relative;
    .container {
        position: relative;
        height: 100%;
        z-index: 1;
        h1{
            color: $color-secondary;
            font-size: 4.5em;
            font-weight: bold;
        }
        p{
            font-size: 1.8em;
        }
    }
    .hero-img {
        width: 850px;
        position: absolute;
        right: -10px;
        top: 10px;
    }
}

</style>