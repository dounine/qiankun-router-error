import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let app = null
const render = (props) => {
  console.log(props);
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('react app bootstraped');
}
export async function mount(props) {
  render(props)
}
export async function unmount(props) {
  console.log(props);
  if (app) {
      // app.$destroy()
      app = null
  }
}


