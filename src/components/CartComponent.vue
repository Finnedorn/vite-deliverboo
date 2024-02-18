<template>
    <div class=" card d-flex flex-column justify-content-between w-25 rounded-4 p-4">
        <div id="cart">
            <h3 class="text-center fs-2 mb-4 fw-bold">
                Il tuo Ordine
            </h3>
            <div v-for="el in this.store.cart" :key="el.dish_id" class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <button @click="removeDishCart(el.dish_id)" class="quantity-btn min mx-1">
                        -
                    </button>
                    <div class="mx-1 ">
                        {{ el.quantity }}
                    </div>
                    <button @click="addDishCart(el.dish_id)" class="quantity-btn plus mx-1">
                        +
                    </button>
                    <div class="mx-1">{{ el.name }}</div>
                </div>
                <div>{{ el.price * el.quantity }} €</div>
            </div>
        </div>
        <div id="restaurantErrorMsg" class="d-none">Non puoi aggiungere un piatto di un altro ristorante</div>
        <div>
            <div class="border-top border-2 py-2">
                Totale 
                <span>{{ store.totalPrice }} €</span>
            </div>
            <div class="d-flex align-items-center justify-content-around my-2">
                <button @click="emptyCart()" class="btn btn-empty  fw-bold me-3">
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

#cart {
    min-height: 300px;

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
    border: 5px solid $color-primary;
    border-radius: 5px;
    padding: 2px 30px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
    }
}
</style>