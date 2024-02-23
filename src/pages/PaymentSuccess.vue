<template>

   <main>
        <div class="container py-5">
            <div class="d-flex flex-column justify-content-center align-items-center text-center">
                <div class="success-img-wrapper">
                    <img src="../assets/img/logo_food_green.png" alt="not found image">
                </div>
                <h1 class="fw-bold mb-3">Pagamento effettuato con successo!</h1>
                <p class="fs-4 mb-3">Grazie per aver acquistato da noi.</p>
                <p class="fs-5 mb-5">Il tuo ordine è stato inviato al ristorante,<br> a breve riceverai una mail con tutti i dettagli del tuo ordine.</p>
               
                <p class="mb-2">Fra pochi secondi verrai reindirizzato alla home.</p>
                <router-link :to="{ name: 'home' }" class="text-white">
                    <button class="btn btn-tertiary-color">Torna alla home</button>
                </router-link>
            </div>
        </div>
        <img class="img-wave" src="../assets/img/wave-white.png" alt="wave-bg">

    </main>
</template>

<script>
export default {
   name: "PaymentSuccess",
   data() {


      return {

      }
   },
   methods:{
      redirect(){
         this.$router.push({ name: 'home' });
      }
   },
   mounted(){

      setTimeout(() => this.redirect(),10000);
   }
}
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

main{
    background-color: $color-primary;
}
.success-img-wrapper {
    width: 100px;
}</style>