import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import axios from 'axios'

Vue.prototype.$axios = axios

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})
