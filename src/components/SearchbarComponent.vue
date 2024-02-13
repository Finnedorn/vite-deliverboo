<template>
    <!-- searchbar  -->
    <div id="hero">
        <div class="container">
            <div class="m-auto d-flex pt-4">
                <input type="text" class="form-control" placeholder="Poke, Indiana..." v-model="searchedTypes" @keyup="$emit('TypeSearcher', searchedTypes)">
                <!-- <button class="btn btn-outline-success" type="button" @click="$emit('TypeSearcher', searchedTypes)">Cerca</button> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "SearchbarComponent",
    data() {
        return {
            searchedTypes: "",
        };
    },
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