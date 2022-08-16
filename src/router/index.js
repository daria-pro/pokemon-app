import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon-home',
    name: 'pokemon-home',
    component: () => import('../views/PokemonHome.vue'),
    children: [
      {
        path: '/pokemon-app/:slug',
        name: 'pokemon',
        component: () => import('../views/PokemonView.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
