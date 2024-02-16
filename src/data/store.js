import { reactive } from "vue";

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api",
    imagePath: "http://127.0.0.1:8000/storage/",
    types: [],
    selectedTypes: [],
    selectedRestaurants: [],
    restaurantParams :[],
    dataLoading: false
});