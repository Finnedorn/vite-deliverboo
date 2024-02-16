<template>
    <div v-if="restaurant">
        <div id="restaurant-cover">
            <img :src="store.imagePath + restaurant.image" :alt="restaurant.name" />
            <div id="restaurant-card" class="card text-center">
                <div class="card-header bg-white">
                    <h2 class="fw-bold">{{restaurant.name}}</h2>

                </div>
                <div class="card-body p-1">
                    <p class="d-flex justify-content-center  column-gap-2">
                        <span v-for="(type) in restaurant.types" class="color-tertiary fs-5">{{type.name}}</span>
                    </p>
                    <p>{{restaurant.address}}</p>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="d-flex justify-content-between ">
                <div id="menu">
                    <h3 class="fw-bold fs-2 mb-5">Menu</h3>
                    <div class="card mb-2 p-2" v-for="(dish) in restaurant.dishes">
                        <div class="d-flex justify-content-between">
                            <div class="card-left me-5">
                                <h5 class="fw-bold fs-4">{{dish.name}}</h5>
                                <p class="">{{dish.ingredients}}</p>
                            </div>
                            <div class="card-right">
                                <div class="dish-img">
                                    <img :src="store.imagePath + dish.image " :alt="dish.name">
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div id="cart">
                    <div class="card">
                        <div class="text-center">carrello</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
export default {
    name: 'RestaurantDetails',
    components: {
    },
    data() {
        return {
            store,
            restaurant:null,
        };
    },
    methods: {
        getRestaurantData() {
      axios
        .get(this.store.apiUrl + "/restaurants/" + this.$route.params.slug)
        .then((res) => {
          console.log(res.data);
          if (res.data.results) {
            this.restaurant = res.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
    },
    mounted() {
        this.getRestaurantData();
    }
}
</script>
  
<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

#restaurant-cover{
    height: 300px;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 768px) {
        // height: 200px;
    }

    img{
        object-fit: cover;
        object-position: center;
    }
    #restaurant-card{
        border: 3px solid $color-primary;
        position: absolute;
        left:50%;
        top: 40%;
        transform: translate(-50%, 0);
        width: 50%;
        z-index: 100;
        @media screen and (max-width: 768px) {
            width: 90%;
        }
    }
}
.dish-img{
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
}
#cart{
    // width: 100px;
    padding: 20px;

}


</style>