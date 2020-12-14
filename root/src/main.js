import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'user',
    entry: 'http://localhost:8082',
    container: '#vue',
    activeRule: '/user'
  }
], {
  beforeMount: app => {
    console.log('beforeMount', app.name);
    return Promise.resolve()
  },
  afterMount: app => {
    console.log('afterMount', app.name);
    return Promise.resolve()
  }
})

start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
