import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Auth from '../views/Auth.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth'
  },

  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
