import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { navigation } from '@/variables/variables'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>  import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>  import('@/views/AboutView.vue'),
    },
    {
      path: '/texts',
      name: 'texts',
      component: () =>  import('@/views/TextsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>  import('@/views/ContactView.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () =>  import('@/views/PrivacyView.vue'),
    }
  ]
})

export default router
