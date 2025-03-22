import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Category from '../views/Category.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game/:id',
    name: 'game',
    component: Game
  },
  {
    path: '/category/:id',
    name: 'category',
    component: Category
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 