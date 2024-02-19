<template>
    <NavbarComponent />
    <div v-if="restaurant">
        <div id="restaurant-cover">
            <img :src="store.imagePath + restaurant.image" :alt="restaurant.name" />
            <div id="restaurant-card" class="card text-center">
                <div class="card-header bg-white">
                    <h2 class="fw-bold">{{ restaurant.name }}</h2>

                </div>
                <div class="card-body p-1">
                    <p class="d-flex justify-content-center  column-gap-2">
                        <span v-for="(type) in restaurant.types" class="color-tertiary fs-5">{{ type.name }}</span>
                    </p>
                    <p>{{ restaurant.address }}</p>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="d-flex justify-content-between ">
                <div id="menu">
                    <h3 class="fw-bold fs-2 mb-5">Menu</h3>
                    <div class="card mb-2 p-2" v-for="(dish) in restaurant.dishes" @click="addToCart(dish)">
                        <div class="d-flex justify-content-between">
                            <div class="card-left me-5">
                                <h5 class="fw-bold fs-4">{{ dish.name }}</h5>
                                <p class="">{{ dish.ingredients }}</p>
                                <p>{{ dish.price }} €
                                </p>
                            </div>
                            <div class="card-right">
                                <div class="dish-img">
                                    <img :src="store.imagePath + dish.image" :alt="dish.name">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <CartComponent />
                <!-- <div id="cart">
                    <table>
                        <thead>carrello</thead>
                        <th>prodotti</th>
                        <th>quantità</th>
                        <th>prezzo</th>
                        <tbody>
                            <tr v-for="el in this.store.cart" :key="el.dish_id">
                                <td>{{ el.name }}</td>
                                <td>
                                    <button @click="removeDishCart(el.dish_id)">-</button>
                                    {{ el.quantity }}</td>
                                    <button @click="addDishCart(el.dish_id)">+</button>                                    
                                <td>{{ el.price * el.quantity }} €</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="restaurantErrorMsg" class="d-none">Non puoi aggiungere un piatto di un altro ristorante</div>
                    <button @click="emptyCart()">Svuota</button>
                </div> -->
            </div>
        </div>

    </div>
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import NavbarComponent from "@/components/NavbarComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
export default {
    name: 'RestaurantDetails',
    components: {
        NavbarComponent,
        CartComponent,
    },
    data() {
        return {
            store,
            restaurant: null,
        };
    },
    methods: {
        getRestaurantData() {
            axios
                .get(this.store.apiUrl + "/restaurants/" + this.$route.params.slug)
                .then((res) => {
                    //   console.log(res.data);
                    if (res.data.results) {
                        this.restaurant = res.data.results;
                    } else {
                        this.$router.push({ name: "not-found" });
                    }
                });
        },

        addToCart(dish) {
            const newItem = this.store.cart.find(el => el.dish_id === dish.id);
            let cart_restaurant = localStorage.cart_restaurant;

            if (!cart_restaurant) {
                localStorage.setItem('cart_restaurant', dish.restaurant_id);
                cart_restaurant = dish.restaurant_id;
            }

            if (dish.restaurant_id != cart_restaurant) {
                document.getElementById('restaurantErrorMsg').classList.remove('d-none');
                return
            }

            if (newItem) {
                console.log(newItem)
                newItem.quantity++;

                this.store.cartTotalPrice = JSON.parse(localStorage.cart_total) + JSON.parse(newItem.price);
            } else {
                console.log(dish)
                let cartItem = {
                    name: dish.name,
                    price: dish.price,
                    quantity: 1,
                    dish_id: dish.id,
                    image: dish.image
                };

                this.store.cartTotalPrice = JSON.parse(localStorage.cart_total) + JSON.parse(cartItem.price);

                this.store.cart.push(cartItem);
            }


            localStorage.setItem('cart_total', JSON.stringify(this.store.cartTotalPrice));
            localStorage.setItem('shoppingCart', JSON.stringify(this.store.cart));
        },

        //     addDishCart(id) {
        //         const cart = this.store.cart;
        //         const addItem = cart.find(el => el.dish_id === id);

        //         addItem.quantity++;

        //         localStorage.setItem('shoppingCart', JSON.stringify(cart));
        //     },

        //     removeDishCart(id) {
        //         const cart = this.store.cart;
        //         const removeItem = cart.find(el => el.dish_id === id);

        //         if (removeItem.quantity == 1) {
        //             const indexItem = cart.indexOf(removeItem);
        //             cart.splice(indexItem, 1);
        //         } else {
        //             removeItem.quantity--;
        //         }

        //         if (!cart.length) {
        //         localStorage.cart_restaurant = '';
        //         localStorage.setItem('cart_restaurant', '');
        //         }

        //         localStorage.setItem('shoppingCart', JSON.stringify(cart));
        //     },

        //     emptyCart() {
        //         this.store.cart = [];
        //         localStorage.cart_restaurant = '';

        //         localStorage.setItem('shoppingCart', []);
        //         localStorage.setItem('cart_restaurant', '');

        //         document.getElementById('restaurantErrorMsg').classList.add('d-none');

        //     }

    },

    mounted() {
        this.getRestaurantData();

        // const shoppingCart = localStorage.getItem('shoppingCart');
        // if (shoppingCart) {
        //     this.store.cart = JSON.parse(shoppingCart);
        // }
    },

}
</script>
  
<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

#restaurant-cover {
    height: 300px;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 768px) {
        // height: 200px;
    }

    img {
        object-fit: cover;
        object-position: center;
    }

    #restaurant-card {
        border: 3px solid $color-primary;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, 0);
        width: 50%;
        z-index: 100;

        @media screen and (max-width: 768px) {
            width: 90%;
        }
    }
}

.dish-img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
}
</style>