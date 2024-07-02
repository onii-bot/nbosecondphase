import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home.vue')
    },

    {
      path: '/walletchecker',
      name: 'walletchecker',
      component: () => import('../components/walletchecker.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/about.vue')
    }
  ]
})

export default router
