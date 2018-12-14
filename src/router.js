import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'


Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
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

export default router
