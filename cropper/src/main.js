// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import ElementUI from 'element-ui';
import Vant from 'vant';
import 'vant/lib/index.css';


import "./assets/reset.css"
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.use(ElementUI);
Vue.use(Vant);
Vue.prototype.HOST=''
axios.defaults.headers.common['token'] = '31d2b0eb326a49176c78ec907d0f74ee';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
