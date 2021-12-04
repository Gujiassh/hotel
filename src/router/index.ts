import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'HomePage',

        component: () => import('../views/HomePage/HomePage.vue')
      },
      {
        path: '/usermanagement',
        name: 'Usermanagement',
        component: () => import('../views/Usermanagement/Usermanagement.vue')
      },
      {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('../views/userInfo/UserInfo.vue')
      },
      {
        path: '/examine',
        name: 'examine',
        component: () => import('../views/Examine/Examine.vue')
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () => import('../views/Withdrawal/Withdrawal.vue')
      },
      {
        path: '/withdrawalapply',
        name: 'withdrawalapply',
        component: () => import('../views/Withdrawalapply/Withdrawalapply.vue')
      },
      {
        path: '/realNameexamine',
        name: 'realNameexamine',
        component: () => import('../views/RealNameExamine/RealNameExamine.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
