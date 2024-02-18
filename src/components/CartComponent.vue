<template>
    <div class=" card d-flex flex-column justify-content-between rounded-4  p-4">
        <div id="cart">
            <h3 class="text-center fs-2 mb-4 fw-bold">
                Il tuo Ordine
            </h3>
            <div v-for="el in this.store.cart" :key="el.dish_id" class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <button @click="removeDishCart(el.dish_id)" class="quantity-btn min me-1">
                        -
                    </button>
                    <div class="me-1 quantity-wrap">
                        {{ el.quantity }}
                    </div>
                    <button @click="addDishCart(el.dish_id)" class="quantity-btn plus me-2">
                        +
                    </button>
                    <div>{{ el.name }}</div>
                </div>
                <div>{{ el.price * el.quantity }} €</div>
            </div>
        </div>
        <div id="restaurantErrorMsg" class="d-none text-center py-2 fw-bold">Non puoi aggiungere un piatto <br> di un altro
            ristorante</div>
        <div>
            <div class="border-top border-2 pt-2 pb-4 d-flex justify-content-between fw-bold">
                Totale
                <span>{{ store.totalPrice }} €</span>
            </div>
            <div class="d-flex align-items-center justify-content-between my-2">
                <button @click="emptyCart()" class="btn btn-empty text-light fw-bold me-3">
                    Svuota <br> Carrello
                </button>
                <router-link :to="{ name: 'checkout' }">
                    <button class="btn btn-checkout text-light fw-bold ">
                        Vai al <br> Checkout
                    </button>
                </router-link>
            </div>
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
        };
    },
    methods: {

        addDishCart(id) {
            const cart = this.store.cart;
            const addItem = cart.find(el => el.dish_id === id);

            addItem.quantity++;

            localStorage.setItem('shoppingCart', JSON.stringify(cart));
        },

        removeDishCart(id) {
            const cart = this.store.cart;
            const removeItem = cart.find(el => el.dish_id === id);

            if (removeItem.quantity == 1) {
                const indexItem = cart.indexOf(removeItem);
                cart.splice(indexItem, 1);
            } else {
                removeItem.quantity--;
            }

            if (!cart.length) {
                localStorage.cart_restaurant = '';
                localStorage.setItem('cart_restaurant', '');
            }

            localStorage.setItem('shoppingCart', JSON.stringify(cart));
        },

        emptyCart() {
            this.store.cart = [];
            localStorage.cart_restaurant = '';

            localStorage.setItem('shoppingCart', []);
            localStorage.setItem('cart_restaurant', '');

            document.getElementById('restaurantErrorMsg').classList.add('d-none');

        }
    },
    mounted() {
        const shoppingCart = localStorage.getItem('shoppingCart');
        if (shoppingCart) {
            this.store.cart = JSON.parse(shoppingCart);
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
            background-color: $color-secondary;
            border: none;
            border-radius: 100px;
            font-weight: bold;
            font-size: 0.7rem;
        }

        .plus {
            padding: 1px 5.5px;
        }

        .min {
            padding: 1px 7px
        }

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
        background-color: $color-secondary;
        border-radius: 5px;
        padding: 2px 30px;

        &:hover {
            transform: scale(1.05);
            transition: all 0.5s;
        }
    }

}
</style>