<template>
    <div id="cart">
        <!-- <div class="card">
            <div class="card-head">carrello</div>
            <div class="card-body">
                <h2>hello</h2>
            </div>
        </div> -->
        <div>
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
                            {{ el.quantity }}
                        </td>
                        <button @click="addDishCart(el.dish_id)">+</button>
                        <td>{{ el.price * el.quantity }} €</td>
                    </tr>
                </tbody>
            </table>
            <div id="restaurantErrorMsg" class="d-none">Non puoi aggiungere un piatto di un altro ristorante</div>
            <button @click="emptyCart()">Svuota</button>
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
    // width: 100px;
    padding: 20px;

}

</style>