<template>
    <NavbarComponent />
    <main>
        <div class="top">
            <div class="container pt-5">
                <h1 class="text-center my-5 fw-bold">Checkout</h1>
                <div class="row row-gap-3 ">

                    <!-- card carrello  -->
                    <CartComponent />
                    <!-- <div class="col-12 col-md-4">
                        <div class="card">
                            <div class="card-header bg-white ">
                                <h3 class="text-center fw-bold">Il tuo ordine</h3>
                            </div>
                            <div class="card-body border-0">
                                <div class="d-flex justify-content-between">
                             
                                    <div>Inserire cibo qui</div>
                                    <div>€</div>
                                </div>
                            </div>
                            <div class="card-footer bg-white">
                                <div class="d-flex justify-content-between my-2">
                                    <div class="fw-bold ">Totale</div>
                                    <div>€</div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                    <!-- card dati -->

                    <div class="col-12 col-md-8">
                        <h5>token {{ tokenApi }}</h5>

                        <div>
                <div id="dropin-container"></div>
                <form @submit.prevent="submitPayment">
                  <!-- Other form fields can go here -->
                  <button type="submit">Submit Payment</button>
                </form>
              </div>
                        <!-- <div class="card rounded-4 p-4">
                            <div class="card-header bg-white ">
                                <h3 class="text-center fw-bold">I tuoi dati</h3>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3 row">
                                        <div class="col-6">
                                            <label for="name" class="form-label">Nome</label>
                                            <input type="text" class="form-control" id="name" aria-describedby="name">
                                        </div>
                                        <div class="col-6">
                                            <label for="surname" class="form-label">Cognome</label>
                                            <input type="text" class="form-control" id="surname" aria-describedby="surname">
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <div class="col-6">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email" aria-describedby="email">
                                        </div>
                                        <div class="col-6">
                                            <label for="phone" class="form-label">Numero di telefono</label>
                                            <input type="text" class="form-control" id="phone" aria-describedby="phone">
                                        </div>
                                    </div>
            
            
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Indirizzo</label>
                                        <input type="text" class="form-control" id="address"
                                            aria-describedby="address">
                                    </div>

                                  pagamento  
                                   
                                    <div class="mb-3">
                                        <div class="card">
                                            <div class="card-body">
                                                Pagamento
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-send fw-bold mt-3">Invia</button>
                                </form>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>
        <div class="bottom"></div>

    </main>
</template>


<script>
import axios from 'axios';
import { store } from '../data/store.js';
import NavbarComponent from '@/components/NavbarComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import PaymentComponent from '@/components/PaymentComponent.vue';

//  import braintree from '../node_modules/braintree-web';
//import dropin from '../node_modules/braintree-web-drop-in/dist/dropin';
export default {
    name: 'AppCheckout',
    data() {
        return {
            tokenApi: '',
        }
    },
    components: {
        CartComponent,
        NavbarComponent,
        PaymentComponent
    },
    methods: {
        getTokenApi() {
            axios.get(`${store.apiUrl}/orders/generate `).then((res) => {
                // console.log(res.data.token);
                this.tokenApi = res.data.token;
                braintree.dropin.create({

                    authorization:'sandbox_g42y39zw_348pk9cgf3bgyw2b',
                    container: '#dropin-container',
                    card: {
                        overrides: {
                            styles: {
                                input: {
                                    color: 'white',
                                },
                                'input:focus': {
                                    color: 'white',
                                },
                                '.number': {
                                    'font-family': 'monospace'
                                    // Custom web fonts are not supported. //Only use system installed fonts.
                                },
                                '.invalid': {
                                    color: '#FC8019'
                                }
                            }
                        }
                    }


                })
            })


        }
    },
    mounted() {
        this.getTokenApi()
    }

}
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

main {
    height: 100%;

    .card {
        box-shadow: -5px 3px 8px 3px rgba(0, 0, 0, 0.171);
        border: 0 !important;
    }

    .top {
        background-color: $color-bg-primary;
        height: 50vh;
    }

    .container {
        z-index: 1000;
    }

    .bottom {
        height: 50vh;
        background-color: $color-primary;
        z-index: 1;
    }

    h1 {
        color: $color-secondary;
        font-size: 4em;
    }

    .border-top-grey {
        border-top: rgba(0, 0, 0, 0.175);
    }

    .btn-send {
        background-color: $color-primary;
        border-radius: 5px;
        color: $color-white;

        &:hover {
            transform: scale(1.05);
            transition: all 0.5s;
        }
    }
}
</style>