<template>
    <header>
        <!-- navbar -->
        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid overflow-hidden py-2 px-4">

                <!-- logo -->
                <div id="logo" class="py-2 mx-1 me-3">
                    <router-link :to="{ name: 'home' }">
                        <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo" />
                    </router-link>
                </div>

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
                <div class="d-flex align-items-center" :class="{ 'd-none': this.$route.name !== 'home'}">
                    <div class="rest-link fs-5 me-3 fw-bold d-none d-md-block ">
                        Sei un ristoratore?
                    </div>
                    <button class="btn btn-admin">
                        <a class="text-decoration-none text-light fs-5 fw-bold" href="http://127.0.0.1:8000/">
                            Vai all'area riservata
                        </a>
                    </button>
                </div>

            </div>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: "NavbarComponent",
    components: {},
    data() {
        return {
            
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

    .btn-admin {
        background-color: $color-primary;
        border-radius: 5px;
        &:hover {
            transform: scale(1.05);
            transition: all 0.5s;
        }
    }
}
</style>