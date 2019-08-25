import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
// import { route } from "./router";
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = axios;
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
