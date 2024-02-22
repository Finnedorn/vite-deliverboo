<template>
    <div class="card d-flex flex-column justify-content-between rounded-4 p-4 position-relative overflow-hidden ">
        <div v-if="deleteCart" id="cartResetMsg" class=" text-center fw-bold">
            <div class="d-flex flex-column justify-content-center align-items-center h-100 px-3">
                <div class="fs-3 mb-3">
                    Sei sicuro di voler svuotare il tuo carrello?
                </div>
                <div class="d-flex">
                    <button @click="deleteCart = false" class="btn btn-warning text-white me-3 fw-bold">
                        Annulla
                    </button>
                    <button @click="emptyCart()" class="btn btn-danger fw-bold">
                        Svuota
                    </button>
                </div>

            </div>
        </div>
        <div v-if="store.cart.length > 0">
            <div id="cart">
                <h3 class="text-center  mb-4 fw-bold">
                    Il tuo Ordine
                </h3>
                <div v-for="el in this.store.cart" :key="el.dish_id" class="row mb-2 align-items-center ">
                    <div class="col-3 d-flex align-items-center">
                        <button @click="removeDishCart(el.dish_id)" class="quantity-btn min me-2">
                            -
                        </button>
                        <div class="me-2 quantity-wrap">
                            {{ el.quantity }}
                        </div>
                        <button @click="addDishCart(el.dish_id)" class="quantity-btn plus">
                            +
                        </button>
                    </div>
                    <div class="col">{{ el.name }}</div>
                    <div class="col-3">{{ (el.price * el.quantity).toFixed(2) }} €</div>
                </div>
            </div>


        </div>

        <div v-else id="empty-cart">
            <h3 class="text-center mb-4 fw-bold">Il tuo carrello è vuoto</h3>
            <img src="../assets/img/logo_food_pink.png" alt="logo">
        </div>
        <div class="border-top border-2 pt-2 pb-4 d-flex justify-content-between fw-bold">
            Totale
            <span>{{ this.store.cartTotalPrice.toFixed(2) }} €</span>
        </div>

        <div v-if="this.$route.name !== 'checkout'" class="d-flex align-items-center justify-content-between my-2">
            <button @click="deleteCart = true" class="btn btn-empty fw-bold me-3"
                :class="(store.cart.length == 0) ? 'disabled' : ''">
                Svuota <br> Carrello
            </button>

            <button class="btn btn-checkout text-light fw-bold " :class="(store.cart.length == 0) ? 'disabled' : ''">
                <router-link :to="{ name: 'checkout' }" class="text-black">
                    Vai al <br> Checkout
                </router-link>
            </button>

        </div>
    </div>
</template>
  
<script>
import { store } from "../data/store.js";
export default {
    name: "CartComponent",
    data() {
        return {
            store,
            deleteCart: false,
        };
    },
    methods: {

        addDishCart(id) {
            const addItem = this.store.cart.find(el => el.dish_id === id);

            addItem.quantity++;
            this.store.cartTotalPrice = JSON.parse(localStorage.cart_total) + JSON.parse(addItem.price);

            localStorage.setItem('cart_total', JSON.stringify(this.store.cartTotalPrice));
            localStorage.setItem('shoppingCart', JSON.stringify(this.store.cart));
        },

        removeDishCart(id) {
            const removeItem = this.store.cart.find(el => el.dish_id === id);

            this.store.cartTotalPrice = JSON.parse(localStorage.cart_total) - JSON.parse(removeItem.price);

            if (removeItem.quantity == 1) {
                this.store.cart.splice(this.store.cart.indexOf(removeItem), 1);
            } else {
                removeItem.quantity--;
            }

            if (!this.store.cart.length) {
                localStorage.cart_restaurant = '';
                this.store.cartTotalPrice = 0;
                localStorage.setItem('cart_restaurant', '');
                localStorage.setItem('cart_total', 0);
            }

            localStorage.setItem('cart_total', JSON.stringify(this.store.cartTotalPrice));
            localStorage.setItem('shoppingCart', JSON.stringify(this.store.cart));
        },

        emptyCart() {
            this.store.cart = [];
            localStorage.cart_restaurant = '';
            this.store.cartTotalPrice = 0;

            localStorage.setItem('shoppingCart', []);
            localStorage.setItem('cart_restaurant', '');
            localStorage.setItem('cart_total', 0);
            this.deleteCart = false;
            // document.getElementById('restaurantErrorMsg').classList.add('d-none');
        }
    },

    mounted() {
        const shoppingCart = localStorage.getItem('shoppingCart');
        if (shoppingCart) {
            this.store.cart = JSON.parse(shoppingCart);
        }
        const cartTotal = localStorage.getItem('cart_total');
        if (cartTotal) {
            this.store.cartTotalPrice = JSON.parse(cartTotal);
        }
    },
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.card {
    width: 350px;
    box-shadow: -5px 3px 8px 3px rgba(0, 0, 0, 0.171);
    border: 0 !important;

    #cart {
        min-height: 300px;

        .quantity-wrap {
            text-align: center;
            width: 20px;
        }

        .quantity-btn {
            color: $color-white;
            background-color: $color-tertiary;
            border: none;
            border-radius: 100px;
            font-weight: bold;
            font-size: 0.7rem;
        }

        .plus, .min {
            width: 20px;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
        }

    }

    #empty-cart {
        min-height: 300px;
    }

    .btn-checkout {
        background-color: $color-primary;
        border-radius: 5px;
        padding: 5px 30px;

        &:hover {
            transform: scale(1.05);
            transition: all 0.5s;
        }
    }

    .btn-empty {
        background-color: $color-white;
        border: 2px solid $color-primary;
        
        border-radius: 5px;
        padding: 5px 30px;
        a{
            color: $color-black;
        }

        &:hover {
            transform: scale(1.05);
            transition: all 0.5s;
        }
    }

    #cartResetMsg {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: $color-white;
        height: 100%;
        width: 100%;

        .fs-3 {
            color: $color-secondary;
        }

        p {
            color: $color-tertiary;
        }
    }

}
</style>