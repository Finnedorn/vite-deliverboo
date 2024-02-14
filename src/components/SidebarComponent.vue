<template>
    <header>
        <nav class="sidebar">
            <nav class="navbar navbar-expand-lg p-0">
                <div class="d-flex flex-column justify-content-between ">

                    <!-- toggler -->
                    <!-- <button id="navbar-toggler" @click="toggleButton()" :class="{ 'my-3': show }"
                        class="navbar-toggler ms-1 my-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> -->

                    <!-- elementi navbar -->
                    <div class="collapse navbar-collapse flex-column" :class="{ show: show }" id="navbarSupportedContent">
                        <!-- logo -->
                        <div id="logo" class="m-3 mb-5" :class="{ 'd-none': show }">
                            <router-link :to="{ name: 'home' }">
                                <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo" />
                            </router-link>
                        </div>
                        <!-- voci navbar -->
                        <div class="navbar-nav d-flex flex-column">
                            <div>

                            </div>
                            <div class="nav-item my-2" v-for="route in navroutes">
                                <input type="checkbox" class="form-check-input check-type me-3" name="types">
                                <label for="types" class="form-check-label">{{ route }}</label>
                            </div>
                        </div>
                    </div>

                    <!-- admin -->
                    <div class="d-flex flex-column align-items-center p-3">
                        <div class="rest-link fs-5 mb-3 fw-bold">
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
        </nav>
    </header>
</template>
  
<script>
export default {
    name: "SidebarComponent",
    components: {},
    data() {
        return {
            navroutes: [
                'Pizza',
                'Poke',
                'Kebab',
                'Hamburger',
                'Panini',
                'Messicana',
                'Giapponese',
                'Cinese',
                'Italiana',
                'Indiana',
                'Spagnola',
                'Thai',
                'Greca',
                'Argentina',
                'Asiatica',
                'Mediterranea',
            ],
            show: false,
            active: false,
        };
    },
    methods: {
        toggleButton() {
            this.show = !this.show;
        },
    },
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.sidebar {
    background-color: $color-white;
    height: 100vh;
    position: fixed;
    z-index: 100;

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
        width: 100px;

        &:hover {
            transform: scale(1.15);
            transition: all 0.5s;
        }

    }

    .nav-link {
        color: $color-tertiary;
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