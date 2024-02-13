import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../src/pages/AppHome.vue';
import AppRestaurants from '../src/pages/AppRestaurants.vue';
import RestaurantDetails from '../src/pages/RestaurantDetails.vue';

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
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
