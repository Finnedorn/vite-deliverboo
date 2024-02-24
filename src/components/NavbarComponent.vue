<template>
    <header>
        <!-- navbar -->
        <nav class="navbar navbar-expand-lg p-0">
            <div class="d-flex justify-content-between align-items-center py-2 px-4 w-100">

                <!-- logo -->
                <div class="py-2 mx-1 me-3">
                    <router-link :to="{ name: 'home' }">
                        <div id="logo" class="d-flex align-items-center">
                            <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo" />
                            <span class="d-none d-sm-block fs-2 fw-bold">eliveboo</span>
                        </div>
                    </router-link>
                </div>

                <div class="d-flex align-items-center">
                    <!-- toggler -->
                    <!-- <button id="navbar-toggler" @click="toggleButton()" :class="{ 'my-3': show }"
                        class="navbar-toggler ms-1 my-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> -->
                    <!-- elementi navbar -->
                    <!-- <div class="collapse navbar-collapse" :class="{ show: show }" id="navbarSupportedContent">
                        <div id="logo" class="py-2 mx-1 me-3" :class="{ 'd-none': show }">
                            <router-link :to="{ name: 'home' }">
                                <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo" />
                            </router-link>
                        </div>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" v-for="route in navroutes">
                                <router-link class="nav-link fs-5 me-3 fw-bold" :class="{ 'hover-none': show }"
                                    :to="{ name: route.name }">
                                    {{ route.label }}
                                </router-link>
                            </li>
                        </ul>
                    </div> -->
                    
                    
                    <!-- admin -->
                    <div class="d-flex align-items-center">
                        <div class="rest-link fw-bold d-none d-md-block me-2">
                            Sei un ristoratore?
                        </div>
                        <button class="btn btn-primary-color">
                            <a class="text-decoration-none text-light fw-bold" href="http://127.0.0.1:8000/">
                                Vai all'area riservata
                            </a>
                        </button>
                    </div>
    
                    <!-- cart  -->
                    <div v-if="this.$route.name !== 'checkout'" class="cart-box ms-4"
                        :class="{ 'd-lg-none': this.$route.name !== 'home' }">
                        <div class="cart-icon-wrap">
                            <a href="#" @click.prevent="store.cartShow = !store.cartShow" class="cart-icon">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </div>
                        <div v-if="store.cartShow" class="cart-dropdown">
                            <div class="cart-wrapper">
                                <button class="btn-close" @click="store.cartShow = false"></button>
                                <CartComponent />
                            </div>
                        </div>
                    </div>
                    <!-- <div class="n-items d-flex align-items-center justify-content-center" v-if="store.cart.length > 0">
                        {{ store.cart.length }}
                    </div> -->
                </div>

            </div>
        </nav>
    </header>
</template>
  
<script>
import { store } from "../data/store.js";
import CartComponent from "./CartComponent.vue";
export default {

    name: "NavbarComponent",
    components: {
        CartComponent,
    },
    data() {
        return {
            store,

            // navroutes: [
            //     {
            //         label: "Categorie",
            //         name: "restaurants",
            //     },
            //     {
            //         label: "Contattaci",
            //         name: "restaurants",
            //     },
            // ],
            // show: false,
            // active: false,
        };
    },
    methods: {
        toggleButton() {
            this.show = !this.show;
        },

        // getActive() {
        //     return this.active;
        // },
        // toggleAdmin() {
        //     this.active = !this.active;
        // },

    },
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

nav {
    background-color: $color-white;
    z-index: 1000;

    #navbar-toggler {
        border-color: none !important;
        color: $color-tertiary;
        border-radius: none !important;
        padding: none !important;
        outline: 1px solid $color-white;
        outline-offset: none !important;

        &:active {
            transform: scale(1.01);
        }

        &:hover {
            background-color: $color-white;
            border-radius: none !important;
            outline-offset: none !important;
            outline: 3px solid $color-primary;
            transition: all 0.5s;
        }

        .navbar-toggler-icon {
            filter: brightness(2.5);

            &:hover {
                filter: brightness(10);
                transition: all 0.5s;
            }
        }
    }

    #logo {
        width: 70px;

        &:hover {
            transform: scale(1.15);
            transition: all 0.5s;
        }
        span{
            color: $color-secondary;
        }

    }

    .nav-link {
        color: $color-tertiary;

        &:hover {
            color: $color-tertiary-hover;
        }
    }

    .hover-none {
        &:hover {
            border-bottom: 3px solid transparent !important;
        }
    }

    .rest-link {
        color: $color-tertiary;
    }

  

    .cart-box {
        position: relative;

        .cart-icon-wrap {
            
            &:hover {
                transform: scale(1.1);
                transition: all 0.2s;
            }

            a {
                padding: 8px;
                background-color: $color-primary;
                color: $color-white;
                font-size: 1.1rem;
                border-radius: 5px;

                &:hover {
                    transition: all 0.5s;
                }
            }

        }

        // .n-items {
        //     position: absolute;
        //     top: -10px;
        //     right: -10px;
        //     background-color: $color-primary;
        //     width: 20px;
        //     height: 20px;
        //     border-radius: 50%;
        //     color: $color-black;
        //     font-weight: bold;
        //     font-size: 0.9em;

        // }

        .cart-dropdown {
            position: absolute;
            top: 60px;
            right: 0;
            background-color: $color-white;
            border-radius: 20px;
            z-index: 6000;

            .cart-wrapper {
                position: relative;

                .btn-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 100;

                }
            }
        }

    }
}
</style>