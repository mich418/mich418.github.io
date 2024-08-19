import { createRouter, createWebHistory } from 'vue-router'
import { navigation } from '@/variables/variables'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: navigation.map((route) => ({
    name: route.name,
    path: route.path,
    component: () => import(`../views/${route.componentName}`)
  }))
})

export default router
