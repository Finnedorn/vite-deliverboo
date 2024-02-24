<template>
  <LoaderComponent v-if="this.notReady"/>
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
          <div v-for="(type, index) in restaurant.types" class="rest-types d-flex align-items-center ">
            <span class="color-tertiary fs-5 me-2">{{ type.name }}</span>
            <i v-if="index != restaurant.types.length - 1" class="fa-solid fa-circle"></i>

          </div>
          </p>
          <p>{{ restaurant.address }}</p>
        </div>
      </div>
    </div>
    <div id="restaurant-content" class="container mb-5">
      <div class="row position-relative ">

        <!-- Modale aggiunta piatto al carrello -->
        <div id="fixedBadge">
          <div class="mx-auto rounded-5 d-flex align-items-center d-none" id="badgeContent">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle class="circle" cx="30" cy="30" r="30" fill="none"/><path class="check" fill="none" d="m12.5 28l10.0 13 24-22.2"/></svg>
            <span class="text-white fw-bold  px-3">Il piatto selezionato <br> è stato aggiunto</span>
          </div>
        </div>


        <div id="menu" class="col-12 col-lg-7 col-xl-8 position-relative pe-lg-5">
          <h3 class="fw-bold fs-2 mb-5">Menu</h3>

          <!-- <div id="popup" class="d-flex" v-if="popupMsg">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle class="circle" cx="30" cy="30" r="30" fill="none"/><path class="check" fill="none" d="m12.5 28l10.0 13 24-22.2"/></svg>

            <h4 class=" ">gfsdgfsffdsfd</h4>
          </div>   -->
          
          <!-- dish card -->
          <div class="card mb-2 p-2 mb-3" v-for="(dish) in restaurant.dishes">
            <div v-if="!dish.visible" class="not-visible">
              <div>Esaurito</div>
            </div>

            <!-- menu con funzione per aprire modale al click -->
            <!-- <div class="card mb-2 p-2 mb-3" v-for="(dish) in restaurant.dishes" @click="openDishModal(dish)"> -->
            <div class="d-flex justify-content-between align-items-center">
              <div class="card-left me-5 d-flex align-items-center">
                <button class="d-none d-md-block btn btn-checkout text-white fw-bold text-center me-3 " @click="addToCart(dish)" v-if="dish.visible">
                  <i class="fa-solid fa-plus"></i>
                </button>
                <div class="d-flex flex-wrap align-items-center mb-1">
                  <h5 class="fw-bold me-2">{{ dish.name }}</h5>
                  <h5 class="me-2">{{ dish.price.replace('.',',') }} €</h5>
                  <!-- <button class="btn btn-checkout text-white fw-bold" @click="addToCart(dish)" v-if="dish.visible">
                    <i class="fa-solid fa-plus"></i>
                  </button> -->
                  <p class="w-100 card-dish-p">{{ dish.ingredients }}</p>
                </div>

              </div>

              <div class="d-flex justify-content-sm-between flex-column flex-sm-row align-items-center">
                <div class="card-right">
                  <div class="dish-img">
                    <img :src="store.imagePath + dish.image" :alt="dish.name">
                  </div>
                </div>
                <button class="d-md-none btn btn-checkout text-white fw-bold ms-sm-2 mt-2 mt-sm-0" @click="addToCart(dish)" v-if="dish.visible">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-5 col-xl-4 d-none d-lg-block" id="fixedCart">
          <CartComponent id="fixedChildCart"/>
        </div>

      </div>
    </div>

    <!-- Modale aggiunta piatto al carrello -->
    <!-- <div id="popup" class="modal d-block" tabindex="-1" role="dialog" v-if="popupMsg">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
              <div class="modal-body text-center">
                  <h5 class="modal-title fw-bold mb-3">
                    Il piatto
                    <div class="fst-italic"> "{{ dishName }}"</div>
                    è stato aggiunto al tuo carrello.
                  </h5>
              </div>
              </div>
          </div>
    </div>
    <div class="modal-backdrop fade show" v-if="popupMsg"></div> -->


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
<FooterComponent />
</template>
  
<script>
import axios from "axios";
import { store } from "../data/store.js";
import NavbarComponent from "@/components/NavbarComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "RestaurantDetails",
  components: {
    NavbarComponent,
    CartComponent,
    LoaderComponent,
    FooterComponent,
},
  data() {
    return {
      store,
      restaurant: null,
      showModal: false,
      // popupMsg: false,
      dishName:'',
      notReady: true,
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

    addMsg() {
      
      let badge = document.getElementById('fixedBadge');
      let childBadge = document.getElementById('badgeContent');
      let rectBadge = badge.getBoundingClientRect().top;
      console.log(rectBadge)
      
      setTimeout(() => {
        childBadge.classList.add('d-none');
      }, 1000);

      childBadge.classList.remove('d-none');
      if (rectBadge <= 40) {
        childBadge.classList.add('fixed-badge');
      } else {
        childBadge.classList.remove('fixed-badge');
      }
      
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
      this.addMsg();

      if (newItem) {
        // console.log(newItem);
        newItem.quantity++;

        this.store.cartTotalPrice =
          JSON.parse(localStorage.cart_total) + JSON.parse(newItem.price);
      } else {
        // console.log(dish);
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
    loading() {
      setTimeout(() => (this.notReady = false),1000);
    }

  },
  mounted() {
    this.loading();
    this.getRestaurantData();
    // console.log(this.notReady);


    window.addEventListener('scroll', function() {

      let cart = document.getElementById('fixedCart');

      if (cart) {
        let childCart = document.getElementById('fixedChildCart');
        let rectCart = cart.getBoundingClientRect();
        
        if (rectCart.top <= 40) {
          childCart.classList.add('fixed-cart');
        } else {
          childCart.classList.remove('fixed-cart');
        }
      }

      let badge = document.getElementById('fixedBadge');

      if (badge) {
        let childBadge = document.getElementById('badgeContent');
        this.rectBadge = badge.getBoundingClientRect().top;
  
        if (this.rectBadge <= 40) {
          childBadge.classList.add('fixed-badge');
        } else {
          childBadge.classList.remove('fixed-badge');
        }
      }
      
    });

  }
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

.card-dish-p {
  font-size: 0.9rem;
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
  width: 40px;
  height: 100px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 0.3s;
  }

  @media screen and (max-width: 575px) {
    width: 100px;
  }
}
.not-visible{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba($color: #ffffff, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    position: absolute;
    top: 30%;
    right: -10px;
    background-color: $color-secondary;
    text-transform: uppercase;
    font-weight: bold;
    color: $color-white;
    padding: 10px 40px;
    text-align: center;
  }
}

// badge add to cart
#popup {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(100%);
}

#badgeContent{
  padding: 5px;
  max-width: fit-content;
  background-color: #FAC532;
}

.icon {
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  stroke: $color-tertiary;
  // margin: 50px auto;
  -webkit-animation: bounceIcon 0.17s ease-in-out;
  animation: bounceIcon 0.17s ease-in-out;
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}

.circle {
  stroke-dasharray: 190;
  stroke-dashoffset: 190;
  stroke-width: 9;
  stroke: $color-tertiary;
  fill: none;
  -webkit-animation: drawCircle 0.2s linear;
  animation: drawCircle 0.2s linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.check {
  stroke-width: 7;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  -webkit-animation: drawCheckmark 0.2s cubic-bezier(0.89, 0.09, 0.91, 0.67);
  animation: drawCheckmark 0.2s cubic-bezier(0.89, 0.09, 0.91, 0.67) forwards;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@keyframes drawCircle {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes drawCheckmark {
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}

@keyframes bounceIcon {
  0% {
    transform: none;
  }
  50% {
    transform: scale3D(0.9, 0.9, 1);
  }
  100% {
    transform: none;
  }
}

#fixedBadge {
  position: absolute;
  // left: 50%;
  // transform: translate(-50%, -20%);
  z-index: 100;
}

.fixed-cart {
  position: fixed !important;
  top: 40px;
  padding: 10px;
}

.fixed-badge {
  position: fixed !important;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  // transform: translate(-50%);
  // left: 50%;
  padding: 10px;
}

</style>