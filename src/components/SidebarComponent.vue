<template>
    <nav class="sidebar">
        <nav class="navbar navbar-expand-lg p-0 d-flex flex-column justify-content-between h-100">
            <div class="d-flex flex-column align-items-center">
                <!-- logo -->
                <div id="logo" class="m-3 my-1">
                    <router-link :to="{ name: 'home' }">
                        <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo" />
                    </router-link>
                </div>
                <!-- voci navbar -->
                <div class="navbar-nav d-flex flex-column ">
                    <div class="nav-link fs-4 mb-1 fw-bold">
                        Categorie
                    </div>
                    <div id="checkbox-container" class="overflow-y-auto">
                        <div class="nav-item my-2 d-flex align-items-center" v-for="(type, index) in this.store.types">
                            <input type="checkbox" class="form-check-input check-type ms-1  me-2" :id='type.id'
                                 :key="index" :value="type" @change="checkType(type.id)">
                            <label for="types" class="form-check-label fs-5 ">{{ type.name }}</label>
                        </div>
                        <button class="btn btn-admin text-decoration-none text-light fs-5 fw-bold" @click="getcheckedRestaurants()"> Cerca </button>
                    </div>
                </div>
            </div>
            <!-- admin -->
            <div class="d-flex flex-column align-items-center p-3 pb-4">
                <div class="nav-link fs-4 mb-3 fw-bold">
                    Sei un ristoratore?
                </div>
                <button class="btn btn-admin">
                    <a class="text-decoration-none text-light fs-5 fw-bold" href="http://127.0.0.1:8000/">
                        Vai all'area riservata
                    </a>
                </button>
            </div>
        </nav>
    </nav>
</template>
  
<script>
import axios from 'axios';
import { store } from '../data/store.js';

export default {
    name: "SidebarComponent",
    components: {},
    data() {
        return {
            store,
            checkedTypeList: [],
            types_id: []
        };
    },
    methods: {
        checkType(id) {
            console.log(id);
            this.checkedTypeList.push(id);
            console.log(this.checkedTypeList);
        },
        getcheckedRestaurants() {
            axios.get(store.apiUrl + "/restaurants", { params: this.checkedTypeList }).then((res) => {
                console.log(res.data.results);

               
            });
        }
    },
    mounted() {
    }
};
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.sidebar {
    background-color: $color-white;


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

    .btn-admin {
        background-color: $color-primary;
        border-radius: 5px;

        &:hover {
            transform: scale(1.05);
            transition: all 0.5s;
        }
    }

    #checkbox-container {
        max-height: 700px;
    }
}
</style>