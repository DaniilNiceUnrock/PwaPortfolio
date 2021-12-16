import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const loadimage = require('../assets/Spin.gif')
const errorimage = require('../assets/logo.png')


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {keepAlive: true}
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../admin/views/Home.vue'),
    meta: {keepAlive: true}
  },
  {
    path: '/admin/request',
    name: 'AdminSkills',
    component: () => import('../admin/views/Request.vue'),
    meta: {keepAlive: true}
  },
  {
    path: '/request',
    name: 'request',
    component: () => import('../views/Request.vue'),
    meta: {keepAlive: true}
  },

 /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/MyWorks',
    name: 'MyWorks',
    component: () => import('../views/MyWorks.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
