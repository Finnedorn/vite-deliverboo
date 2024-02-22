<template>
   <div class="text-center">
      <h4 class="mt-2">
         Grazie per aver acquistato con noi
      </h4>
      <h6>Il tuo ordine è stato inviato, controlla la tua email</h6>
      <router-link :to="{ name: 'home' }" class="text-white">
         <button class="btn btn-tertiary-color">Torna alla home</button>
      </router-link>
   </div>
</template>

<script>
export default {
   name: "PaymentSuccess",
   data() {


      return {

      }
   }
}
</script>

<style lang="scss" scoped></style>