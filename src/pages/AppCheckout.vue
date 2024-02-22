<template>
  <NavbarComponent />
  <main>
    <div id="checkout" class="">
      <div class="container py-5">
        <h1 class="text-center my-5 fw-bold">Checkout</h1>
        <div class="row row-gap-3">
          <!-- card carrello  -->
          <div class="col-12 col-lg-5 col-xl-4">
            <CartComponent class="w-100" />
          </div>

          <!-- card dati -->
          <div class="col-12 col-lg-7 col-xl-8">
            <div class="card rounded-4 p-4">
              <div class="card-header bg-white">
                <h3 class="text-center fw-bold">I tuoi dati</h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 row">
                    <div class="col-6">
                      <label for="name" class="form-label">Nome</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" />
                    </div>
                    <div class="col-6">
                      <label for="surname" class="form-label">Cognome</label>
                      <input type="text" class="form-control" id="surname" aria-describedby="surname" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <div class="col-6">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" aria-describedby="email" />
                    </div>
                    <div class="col-6">
                      <label for="phone" class="form-label">Numero di telefono</label>
                      <input type="text" class="form-control" id="phone" aria-describedby="phone" />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="address" class="form-label">Indirizzo</label>
                    <input type="text" class="form-control" id="address" aria-describedby="address" />
                  </div>


                </form>

                <div v-if="errorMessage" class="alert alert-danger mt-3">
                  <div class="d-flex justify-content-between">
                    <span>Pagamento non riuscito</span>
                    <a href=""><i class="fa-solid fa-rotate-left text-dark"></i></a>
                  </div>
                </div>

                <div id="dropin-wrapper">
                  <div id="checkout-message"></div>
                  <div id="dropin-container"></div>
                  <button id="submit-button" class="btn btn-send fw-bold" @click="SubmitPayment()">
                    Paga
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="top"> -->

    <!-- </div> -->
    <!-- <div class="bottom"></div> -->
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import { store } from "@/data/store";
import axios from "axios";

export default {
  name: "AppCheckout",
  components: {
    CartComponent,
    NavbarComponent,
  },

  data() {
    return {
      store,
      tokenApi: "",
      dropinInstance: null,
      errorMessage: ''
    };
  },

  methods: {
    getToken() {
      axios.get(`${store.apiUrl}/generate`).then((res) => {
        console.log(res.data.token);
        this.tokenApi = res.data.token;

        this.PaymentForm();
      });
    },

    PaymentForm() {
      braintree.dropin.create(
        {
          authorization: this.tokenApi,
          container: "#dropin-container",
          locale: "it_IT",
        },
        (error, instance) => {
          if (error) {
            console.error(error);
          } else {
            this.dropinInstance = instance;
          }
        }
      );
    },

    SubmitPayment() {
      // console.log('ciao')

      //     braintree.dropin.create({
      //     authorization: 'CLIENT_AUTHORIZATION',
      //     container: '#dropin-container'
      //   }).then(function (dropinInstance) {
      // submitButton.addEventListener('click', function () {
      // console.log(this.dropinInstance);
      // console.log(this.store.cartTotalPrice);
      this.dropinInstance.requestPaymentMethod((err, payload) => {
        //   console.log(payload.nonce);

        // Send payload.nonce to your server
        axios
          .post(this.store.apiUrl + "/payment", {
            paymentMethodNonce: payload.nonce,
            amount: this.store.cartTotalPrice,
          })
          .then((res) => {
            console.log(res);
            this.$router.push({ name: "payment-success" });
          })
          .catch((err) => {
            console.log(err);
            this.errorMessage = err.message;
          });

        console.log(payload);
      });
      // });
      //   }).catch(function (err) {
      //     // Handle any errors that might've occurred when creating Drop-in
      //     console.error(err);
      //   });

      //   instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
      //     // When the user clicks on the 'Submit payment' button this code will send the
      //     // encrypted payment information in a variable called a payment method nonce
      //     axios
      //       .post(`http://127.0.0.1:8000/api/payment`, {
      //       data: { paymentMethodNonce: payload.nonce },
      //     }).done(function (result) {
      //       // Tear down the Drop-in UI
      //       instance.teardown(function (teardownErr) {
      //         if (teardownErr) {
      //           console.error("Could not tear down Drop-in UI!");
      //         } else {
      //           console.info("Drop-in UI has been torn down!");
      //           // Remove the 'Submit payment' button
      //           $("#submit-button").remove();
      //         }
      //       });
      //     });
      //   });


    },
  },

  mounted() {
    this.getToken();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

main {
  #checkout {
    margin-top: 50px;
  }

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  background-image: url(../assets/img/checkout-bg.jpg);
  background-size: cover;
  background-position: bottom;
  background-color: $color-primary;

  background-repeat: no-repeat;

  .card {
    box-shadow: -5px 3px 8px 3px rgba(0, 0, 0, 0.171);
    border: 0 !important;
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