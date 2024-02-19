<template>
    <div class="container-fluid d-flex justify-content-center overflow-hidden">
        <div class="d-flex flex-nowrap justify-content-start py-5">

            <div v-for="food in foods" class="card-slider d-flex align-items-end">
                <div class="row d-flex flex-nowrap ">
                    <div class="fs-3 fw-bold icon d-flex justify-content-center  align-items-center ">{{ food.name }}</div>
                    <div class="description d-flex  justify-content-center  flex-column  overflow-hidden ">
                        <h3 class="fs-2 fw-bold ">Fast Delivery</h3>
                        <p>
                            Get your food at your door step with our fast delivery service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CardSliderComponent",
    data() {
        return {
            foods: [
                {
                    "name": "Pizza"
                },
                {
                    "name": "Poke"
                },
                {
                    "name": "Kebab"
                },
                {
                    "name": "Hamburger"
                },
                {
                    "name": "Panini"
                },
                {
                    "name": "Messicana"
                },
                {
                    "name": "Giapponese"
                },
                {
                    "name": "Cinese"
                },
                {
                    "name": "Italiana"
                },
                {
                    "name": "Indiana"
                },
                {
                    "name": "Spagnola"
                },
                {
                    "name": "Thai"
                },
                {
                    "name": "Greca"
                },
                {
                    "name": "Argentina"
                },
                {
                    "name": "Asiatica"
                },
                {
                    "name": "Mediterranea"
                }
            ]
        }
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.card-slider {
    background-color: aqua;
    width: 60px;
    border-radius: 1rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    transition: .6s cubic-bezier(.28, -0.03, 0, .99);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
}

.card-slider>.row {
    color: rgb(131, 15, 15);
}

.card-slider>.row>.icon {
    color: white;
    width: 50px;
    margin: 15px;
    writing-mode: vertical-rl;
    text-orientation: mixed;

}

.card-slider>.row>.description {
    height: 300px;
    width: 520px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    transition: all 0.3s ease;
}

.description p {
    color: $color-tertiary;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}
.card-slider:hover {
    width: 400px;
}

.card-slider:hover .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

</style>