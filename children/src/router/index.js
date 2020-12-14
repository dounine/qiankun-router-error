import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'User',
    component: User,
    children: [
      {
        path: ':id',
        name: 'Info',
        component: Info
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
