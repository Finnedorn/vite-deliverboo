<template>
    <nav class="sidebar h-100">
        <nav class="navbar navbar-expand-lg p-0 d-flex flex-column h-100">
            <div id="sidebar-top" class="d-flex flex-column p-0 align-items-center">
                <!-- logo -->
                <div id="logo" class="m-3 my-1">
                    <router-link :to="{ name: 'home' }">
                        <img src="../assets/img/logo_food_red.png" alt="deliverboo-logo"/>
                    </router-link>
                </div>
                <!-- voci navbar -->
                <div class="navbar-nav d-flex flex-column p-0">
                    <div class="nav-link fs-4 mb-1 fw-bold">
                        Categorie
                    </div>

                    <div id="checkbox-container" class="">
                        <div class="nav-item my-1 d-flex align-items-center" v-for="(type, index) in this.store.types">
                            <input type="checkbox" class="form-check-input check-type ms-1 me-2" :id='type.id'
                                :key="index" :value="type.id" v-model="checkedTypeList">
                            <label for="types" class="form-check-label fs-5 ">{{ type.name }}</label>
                        </div>
                       

                    </div>
                  
                    
                </div>
            </div>
            <div id="sidebar-bottom" class="text-center">
                        <button class="btn btn-admin text-decoration-none text-light fs-5 fw-bold" @click="getcheckedRestaurants()"> Cerca </button>
                    </div>
            <!-- admin -->
            <div id="sidebar-admin" class="d-flex flex-column align-items-center p-2">
                <div class="nav-link fs-4 mb-2 fw-bold">
                    Sei un ristoratore?
                </div>
                <button class="btn btn-admin">
                    <a class="text-decoration-none text-light fw-bold" href="http://127.0.0.1:8000/">
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
            types_id: [],

        };
    },
    methods: {
        getcheckedRestaurants() {
            this.store.selectedRestaurants = [];
            if (this.checkedTypeList.length == 0) {
                return
            }
            console.log(this.checkedTypeList);
            let typeList = JSON.parse(JSON.stringify(this.checkedTypeList));
            axios.get(store.apiUrl + "/restaurants", { params: { types: typeList } }).then((res) => {
                console.log(res.data.results);

                this.store.selectedRestaurants = res.data.results;

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
;


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
#sidebar-top{
    // height: calc(100% - 100px);
    overflow-y: hidden;
}
#sidebar-bottom{
    // height: 100px;
    margin-bottom: 80px;
    padding: 20px;
}
#sidebar-admin{
    width: 250px;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: $color-white;

    .nav-link, .btn a{
    font-size: 1em !important;
        
    }
}
    #checkbox-container {
        // max-height: 80%;
        padding: 10px;
        margin-bottom: 10px;
        @media screen  and (max-height: 900px) {
            overflow-y: scroll;
            max-height: 70%;
            
        }
                
    }
    ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
        background-color: rgb(185, 238, 221);
        }

        ::-webkit-scrollbar-thumb {
        background: rgb(223, 255, 245); 
        border-radius: 5px;
        }
}
</style>