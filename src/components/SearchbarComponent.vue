<template>
    <!-- searchbar  -->
    <div id="hero">
        <div class="container">
            <div class="m-auto d-flex pt-4">
                <input type="text" class="form-control" placeholder="Poke, Indiana..." v-model="filterSearch">
                <button class="btn btn-outline-success" type="button" @click="$emit('TypeSearcher', filterSearch)">Cerca</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "SearchbarComponent",
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#hero {
    width: 100%;
    height: 300px;
    background-color: $color-primary;
    .container {
        position: relative;
        height: 100%;
    }
}

</style>