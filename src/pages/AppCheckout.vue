<template>
    <NavbarComponent/>
    <main>
        <div id="checkout" class="">
            <div class="container py-5">
                    <h1 class="text-center my-5 fw-bold">Checkout</h1>
                    <div class="row row-gap-3 ">

                        <!-- card carrello  -->
                        <div class="col-12 col-md-4">
                            <CartComponent class="w-100"/>
                        </div>
                    
                        <!-- card dati -->
                        <div class="col-12 col-md-8">
                            <div class="card rounded-4 p-4">
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

                                        <!-- pagamento  -->
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
import NavbarComponent from '@/components/NavbarComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
export default {
    name: 'AppCheckout',
    components: {
        CartComponent,
        NavbarComponent
    }
}
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

main {

    #checkout{
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

    .card{
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
}</style>