<template>
    <!-- About Us  -->
    <div class=" green-wave-wrapper">
        <img src="../assets/img/wave-green.png" alt="wave-green">
    </div>
    <div class="container-fluid about-us-wrapper py-5">
        <!-- part 1 -->
        <div class="container pt-3 ">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="promo-wrapper overflow-hidden">
                        <img src="../assets/img/about-us-01.jpg" alt="about-us-promo-image">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <h2 class="mb-3 fw-bold about-title text-light align-first">
                        Soddisfiamo le tue <br> aspettative
                    </h2>
                    <p class="fs-3 pt-4 about-paragraph align-first">
                        Sei a casa e hai voglia di un pasto delizioso? <br> Vuoi fare la spesa senza uscire di casa? <br>
                        Deliveboo è qui per te! <br> Scegli tra una vasta gamma di ristoranti nella tua città. Da McDonald’s
                        a Pokè House, troverai sicuramente il tuo piatto preferito o scoprirai nuovi ristoranti nelle
                        vicinanze.
                    </p>
                </div>
            </div>
        </div>
        <!-- part 2 -->
        <div class="container pt-5 ">
            <div class="row align-items-center ">
                <div class="col-12 col-md-7">
                    <h2 class="mb-3 fw-bold about-title text-light align-second">
                        Puntualità e cortesia <br> al tuo servizio
                    </h2>
                    <p class="fs-3 pt-4 about-paragraph align-second pe-5">
                        Siamo veloci come un lampo! <br> Ordina qualsiasi cosa nella tua città e ricevila in pochi
                        minuti, segui la tua consegna in tempo reale. Se sei interessato a far crescere il tuo
                        business con noi, visita il nostro sito. <br> Siamo pronti per sfidare la fame e portare il cibo
                        direttamente a casa tua!
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <div class="promo-wrapper overflow-hidden">
                        <img src="../assets/img/about-us-02.jpg" alt="about-us-promo-image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "AboutUsComponent",
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.green-wave-wrapper {
    transform: scaleX(-1);
}

.about-us-wrapper {
    background-color: $color-tertiary;

    .promo-wrapper {
        width: 500px;
        border-radius: 30px;
    }

    .about-title {
        font-size: 4.5rem;
    }

    .align-first {
        text-align: right;
    }

    .align-second {
        text-align: left;
    }

}</style>