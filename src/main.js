import Vue from 'vue'

import App from './App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.baseURL = 'https://fir-authentication-96400.firebaseio.com'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
