<template>
    
    <div class="card-validate pb-4">
    <div class="card-header-cs py-3">
      <h5 class="mb-0">Step 2 - Inserimento dati pagamento</h5>
    </div>
    <div class="container">
      <div id="dropin-container"></div>

      <div class="text-end">
        <button id="submit-button" class="pay-validate btn btn-primary btn-md-lg btn-block mt-4">Invia Pagamento</button>
      </div>

    </div>
  </div>
    <!-- <h5>payment</h5>
    <div id="dropin-container">pippo</div> -->
</template>
 <v-braintree authorization="tokenApi" :card="{
    cardholderName: {
        required: true
    }
}" locale="it_IT" @success="onSuccess" @error="onError" ></v-braintree> 
 
  

<script>
import axios from 'axios';
import { store } from "../data/store.js";



export default {
    name: "PaymentComponent",

    props: {
        authorization: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            store,
            axios,
         
      
        }
    },
    methods: {
        getTokenApi() {
            axios.get(`${store.apiUrl}/orders/generate `).then((res) => {
                // console.log(res.data.token);
                this.tokenApi = res.data.token;
                return this.tokenApi
            })
            braintree.dropin.create({

                authorization: this.tokenApi,
                container: '#dropin-container',
                // card: {
                //     overrides: {
                //         styles: {
                //             input: {
                //                 color: 'white',
                //             },
                //             'input:focus': {
                //                 color: 'white',
                //             },
                //             '.number': {
                //                 'font-family': 'monospace'
                //                 // Custom web fonts are not supported. Only use system installed fonts.
                //             },
                //             '.invalid': {
                //                 color: '#FC8019'
                //             }
                //         }
                //     }
                // }


            })

        },

        onSuccess(payload) {
            let nonce = payload.nonce;
            // Do something great with the nonce...
        },
        onError(error) {
            let message = error.message;
            // Whoops, an error has occured while trying to get the nonce
        }
    },
    mounted() {
        this.getTokenApi()
    },
}

</script>

<style></style>