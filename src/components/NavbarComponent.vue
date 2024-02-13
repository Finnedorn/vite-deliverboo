<template>
    <header>
        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid overflow-hidden">
                <button id="navbar-toggler" @click="toggleButton()" :class="{ 'my-3': show }"
                    class="navbar-toggler ms-1 my-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{ show: show }" id="navbarSupportedContent">
                    <div id="logo" class="py-2 mx-1 me-3" :class="{ 'd-none': show }">
                        <router-link :to="{ name: 'home' }">
                            <img src="" alt="deliverboo-logo" />
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
                </div>

                <!-- admin
                <div class="d-flex align-items-center">
                    <div class="nav-item d-flex flex-column dropdown">
                        <div @click="toggleAdmin" class="d-flex justify-content-center align-items-center h-100 w-100">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <h6>
                                    <a v-if="active" class="text-decoration-none" href="http://127.0.0.1:8000/">
                                        Sei un ristoratore?
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div id="buy-now" :class="{ 'd-none': show }">
                        <img src="../images/Y_-so0KcYkEE0aHtBn1jRuOEik.png" alt="buy-now-cta-button" />
                    </div>
                </div> -->
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
            navroutes: [
                {
                    label: "Categorie",
                    name: "restaurants",
                },
                {
                    label: "Contattaci",
                    name: "restaurants",
                }, 
            ],
            show: false,
            active: false,
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
@use "../styles/partials/variables" as *;

nav {
    background-color: $color-bg-dark;
    z-index: 1000;

    #navbar-toggler {
        border-color: none !important;
        color: $color-tertiary;
        border-radius: none !important;
        padding: none !important;
        outline: 1px solid $color-tertiary;
        outline-offset: none !important;

        &:active {
            transform: scale(1.01);
        }

        &:hover {
            background-color: $color-bg-dark;
            border-radius: none !important;
            outline-offset: none !important;
            outline: 3px solid $color-secondary-blue;
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
        border-bottom: 3px solid transparent;

        &:hover {
            color: $color-white;
            border-color: $color-secondary-blue;
        }
    }

    .hover-none {
        &:hover {
            border-bottom: 3px solid transparent !important;
        }
    }

    #buy-now:hover {
        transform: scale(1.05);
        transition: all 0.5s;
        filter: brightness(1.1);
        cursor: pointer;
    }

    .dropdown {
        position: relative;
        color: $color-tertiary;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: $color-secondary;

        &:hover {
            color: $color-white;
            cursor: pointer;
        }
    }

    .dropdown-content {
        position: absolute;
        right: 40px;
        background-color: $color-bg-dark;
        padding: 10px 20px;

        a {
            color: $color-tertiary;

            &:hover {
                color: $color-white;
            }
        }
    }
}
</style>