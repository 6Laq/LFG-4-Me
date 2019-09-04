import Vue from 'vue'
import App from './App'
import router from './router/index'
import Firebase from './Firebase'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  store: Firebase,
  render: h => h(App),
}).$mount('#app')
