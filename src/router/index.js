import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OQueEuFaco from '@/components/OQueEuFaco.vue'
import Hobbies from '@/components/Hobbies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/o-que-eu-faco',
      name: 'OQueEuFaco',
      component: OQueEuFaco,
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: Hobbies,
    }
  ],
})

export default router
