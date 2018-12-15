import Vue from 'vue'

import App from './App.vue'
import router from './router'
import { store } from './store.js'

import axios from 'axios'

axios.defaults.baseURL = 'https://fir-authentication-96400.firebaseio.com'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
