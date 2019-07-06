import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/pages/ezgapp/App'
import router from '@/pages/ezgapp/router'
import VueLazyload from 'vue-lazyload'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/default.png',
  loading: '/static/img/default.png',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
