import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins:
import "./plugins/vant"
import "./plugins/lazyload"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
