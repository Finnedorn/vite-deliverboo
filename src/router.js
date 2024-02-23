import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../src/pages/AppHome.vue';
import RestaurantDetails from '../src/pages/RestaurantDetails.vue';
import NotFound from '../src/pages/NotFound.vue';
import AppCheckout from './pages/AppCheckout.vue';
import PaymentSuccess from './pages/PaymentSuccess.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/restaurants/:slug',
      name: 'single-restaurant',
      component: RestaurantDetails
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: AppCheckout
    },
    {
      path: '/checkout/payment-success',
      name: 'payment-success',
      component: PaymentSuccess
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ]
})

export default router
