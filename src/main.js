import Vue from 'vue'
import VueResource from 'vue-resource'

// import store from './store'
import App from './App'

import router from './router'

Vue.use(VueResource)

const app = new Vue({
  router,
  // store,
  render: h => h(App)
})

app.$mount('#app')
