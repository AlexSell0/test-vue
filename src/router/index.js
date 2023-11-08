import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: import("../Pages/Home.vue")
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: import("../Pages/Rooms/Index.vue")
  },
  {
    path: '/experts',
    name: 'experts.index',
    component: import("../Pages/Experts/Index.vue")
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
