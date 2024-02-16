import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../src/pages/AppHome.vue';
import AppRestaurants from '../src/pages/AppRestaurants.vue';
import RestaurantDetails from '../src/pages/RestaurantDetails.vue';
import NotFound from '../src/pages/NotFound.vue';
import AppCheckout from './pages/AppCheckout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: AppRestaurants
    },
    {
      path: '/restaurants/:slug',
      name: 'single-restaurant',
      component: RestaurantDetails
    },  {
      path: '/checkout',
      name: 'checkout',
      component: AppCheckout
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ]
})

export default router
