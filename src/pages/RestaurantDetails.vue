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
                    <p class="d-flex justify-content-center column-gap-2">
                        <div v-for="(type,index) in restaurant.types" class="rest-types d-flex align-items-center ">
                            <span class="color-tertiary fs-5 me-2">{{ type.name }}</span>
                            <i  v-if="index != restaurant.types.length - 1" class="fa-solid fa-circle" ></i>
    
                        </div>
                    </p>
                    <p>{{ restaurant.address }}</p>
                </div>
            </div>
        </div>

        <div id="restaurant-content" class="container mb-5">
            <div class="row">
                <div id="menu" class="col-12 col-lg-8 pe-md-5">
                    <h3 class="fw-bold fs-2 mb-5">Menu</h3>
                    <div class="card mb-2 p-2 mb-3" v-for="(dish) in restaurant.dishes">
                    
                    <!-- menu con funzione per aprire modale al click -->
                    <!-- <div class="card mb-2 p-2 mb-3" v-for="(dish) in restaurant.dishes" @click="openDishModal(dish)"> -->

                        <div class="d-flex justify-content-between">
                            <div class="card-left me-5">
                                <div class="d-flex align-items-center mb-3">
                                    <h5 class="fw-bold me-2">{{ dish.name }}</h5>
                                    <h5 class="me-2">{{ dish.price }} €</h5>
                                    <button class="btn btn-checkout text-white fw-bold" @click="addToCart(dish)"> 
                                       <i class="fa-solid fa-plus"></i> 
                                    </button>
                                </div>
                                <p class="">{{ dish.ingredients }}</p>
                                
                            </div>

                            
                            <div class="card-right">
                                <div class="dish-img">
                                    <img :src="store.imagePath + dish.image" :alt="dish.name">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <CartComponent class="d-none d-lg-block col-lg-4" />
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

        <!-- Modale aggiunta piatto al carrello -->
        <!-- <div class="modal d-block" tabindex="-1" role="dialog" v-if="showModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close btn-close" @click="closeModal">
                </button>
            </div>
            <div class="modal-img">
                <img :src="store.imagePath + dishData.image" :alt="dishData.name">
            </div>

            <div class="modal-body text-center">


                <h5 class="modal-title fw-bold mb-3">{{dishData.name}}</h5>

                <h6 class="fw-bold">Ingredienti:</h6>
                <p>{{dishData.ingredients}}</p>
                <p>{{dishData.description}}</p>
                <p class="fs-3">{{dishData.price}} €</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger text-white fw-bold" @click="closeModal">Chiudi</button>
                <button class="btn btn-checkout text-white fw-bold" @click="addToCart(dishData)"> Aggiungi al carrello </button>
            </div>
            </div>
        </div>
        </div> -->
        <!-- <div class="modal-backdrop fade show" v-if="showModal"></div> -->
    
        <!-- Modale errore ordine da due rostoranti diversi -->
       


        <div class="modal d-block" tabindex="-1" role="dialog" v-if="showModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content ">
            <div class="modal-header ">
                <h5 class="modal-title fw-bold mx-auto">Attenzione!</h5>
                <!-- <button type="button" class="close btn-close" @click="showModal = false"> -->
                <!-- </button> -->
            </div>

            <div class="modal-body text-center">
                <p class="fs-5 px-4">Non è possibile ordinare piatti da due ristoranti diversi. <br>
                    Se desideri ordinare da questo ristorante, svuota il tuo carrello.
                </p>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger text-white fw-bold" @click="showModal = false">Chiudi</button>
                <!-- <button class="btn btn-checkout text-white fw-bold" @click=""> Aggiungi al carrello </button> -->
            </div>
            </div>
        </div>
        </div>
        <div class="modal-backdrop fade show" v-if="showModal"></div>


    </div>
        
        

</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import NavbarComponent from "@/components/NavbarComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
export default {
  name: "RestaurantDetails",
  components: {
    NavbarComponent,
    CartComponent,
  },
  data() {
    return {
      store,
      restaurant: null,
      showModal: false,
    //   dishData: null,
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
      const newItem = this.store.cart.find((el) => el.dish_id === dish.id);
      this.showModal = false;

      if (!localStorage.cart_restaurant) {
        localStorage.setItem("cart_restaurant", dish.restaurant_id);
        localStorage.setItem("cart_total", 0);
        localStorage.setItem("shoppingCart", []);

        this.store.cart = [];
        this.store.cartTotalPrice = 0;
        localStorage.cart_restaurant = dish.restaurant_id;
      }

      if (dish.restaurant_id != localStorage.cart_restaurant) {
        document
        this.showModal = true;
        //   .getElementById("restaurantErrorMsg")
        //   .classList.remove("d-none");
        return;
      }

      if (newItem) {
        console.log(newItem);
        newItem.quantity++;

        this.store.cartTotalPrice =
          JSON.parse(localStorage.cart_total) + JSON.parse(newItem.price);
      } else {
        console.log(dish);
        let cartItem = {
          name: dish.name,
          price: dish.price,
          quantity: 1,
          dish_id: dish.id,
          image: dish.image,
        };

        this.store.cartTotalPrice =
          JSON.parse(localStorage.cart_total) + JSON.parse(cartItem.price);

        this.store.cart.push(cartItem);
      }

      localStorage.setItem(
        "cart_total",
        JSON.stringify(this.store.cartTotalPrice)
      );
      localStorage.setItem("shoppingCart", JSON.stringify(this.store.cart));
    },

    // logica modale dish
    // openDishModal(dish) {
    //   this.showModal = true;
    //   this.dishData = dish;
    // },

  },

  mounted() {
    this.getRestaurantData();
  },
};
</script>
  
<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

#restaurant-cover {
  height: 400px;
  position: relative;
  img {
    overflow: hidden;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
}

#restaurant-card {
  border: 3px solid $color-primary;
  position: absolute;
  left: 50%;
  top: 400px;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 100;

  @media screen and (max-width: 768px) {
    width: 90%;
    top: 300px;
  }
}

.dish-img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
  }
}

#restaurant-content {
  margin-top: 8rem;
}

.modal-img {
  height: 400px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.rest-types {
  i {
    font-size: 0.5em;
    color: $color-primary-hover;
  }
}
.btn-checkout {
  background-color: $color-primary;
  &:hover {
      cursor: pointer;
      transform: scale(1.08);
      transition: all 0.3s;
    }
}

</style>