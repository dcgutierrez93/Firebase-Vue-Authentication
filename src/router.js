import Vue from 'vue'
import Router from 'vue-router'

import store from './store'

import Welcome from './components/welcome/Welcome.vue'
import Secure from './components/secure/Secure.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

// Router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//     const currentUser = firebase.auth().currentUser
//
//     if (requiresAuth && !currentUser) {
//         next('/login')
//     } else if (requiresAuth && currentUser) {
//         next()
//     } else {
//         next()
//     }
// })

export default router
