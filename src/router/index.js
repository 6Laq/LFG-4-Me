import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'


Vue.use(Router)

const router = new Router({
  routes : [
    {
      path: '/',
      name: 'Home',
      page: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      page: SignIn
    }
  ]
})

export default router