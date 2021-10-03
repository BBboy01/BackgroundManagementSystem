import { createRouter, createWebHashHistory } from 'vue-router'

import cache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

import type { Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login' && !cache.getCache('token')) {
    return '/login'
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
