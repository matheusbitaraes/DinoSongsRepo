import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import StoragePage from '@/components/StoragePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/storage',
      name: 'storage',
      component: StoragePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
