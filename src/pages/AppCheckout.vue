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


                <form @submit.prevent="SubmitPayment()" novalidate>

                  <div class="mb-3 row">
                    <div class="col-6">
                      <label for="name" class="form-label">Nome</label>
                      <input v-model="name" type="text" class="form-control" id="name" aria-describedby="name" required/>
                    </div>
                    <div class="col-6">
                      <label for="surname" class="form-label">Cognome</label>
                      <input v-model="surname" type="text" class="form-control" id="surname" aria-describedby="surname" required/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <div class="col-6">
                      <label for="email" class="form-label">Email</label>
                      <input v-model="email" type="email" class="form-control" id="email" aria-describedby="email" required/>
                    </div>
                    <div class="col-6">
                      <label for="phone" class="form-label">Numero di telefono</label>
                      <input v-model="phone" type="text" class="form-control" id="phone" aria-describedby="phone" required/>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="address" class="form-label">Indirizzo</label>
                    <input v-model="address" type="text" class="form-control" id="address" aria-describedby="address" required/>
                  </div>

                  <div v-if="errorMessage" class="alert alert-danger mt-3">
                    <div class="d-flex justify-content-between">
                      <span>Pagamento non riuscito</span>
                      <a href=""><i class="fa-solid fa-rotate-left text-dark"></i></a>
                    </div>
                  </div>
  
                  <div id="dropin-wrapper">
                    <div id="checkout-message"></div>
                    <div id="dropin-container"></div>
                    <button type="submit" id="submit-button" class="btn btn-send fw-bold">
                      Paga
                    </button>
                  </div>

                </form>


                
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
      errorMessage: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
    };
  },

  methods: {
    getToken() {
      axios.get(`${store.apiUrl}/generate`).then((res) => {
        // console.log(res.data.token);
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

      const form = document.querySelector('form');
      if (form.checkValidity()) {
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

              this.UserFormData();
            })
            .catch((err) => {
              console.log(err);
              this.errorMessage = err.message;
              form.preventDefault();
              form.stopPropagation();
              return console.log('errore pagamento');

            });
  
          console.log(payload);
        });

      } else {
        form.classList.add('was-validated');
      }

    },

    UserFormData() {
      const formData = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        address: this.address,
        phone: this.phone,
        total_price: this.store.cartTotalPrice,
        dishes: this.store.cart,
      };
      console.log(formData);
      
      axios.post(this.store.apiUrl + '/orders', formData).then((res)=>{
        console.log(res.data);
          this.name = '';
          this.surname = '';
          this.email= '';
          this.address = '';
          this.phone = '';
      }).catch((err)=>{
          console.log('error', err);
      })
    }



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