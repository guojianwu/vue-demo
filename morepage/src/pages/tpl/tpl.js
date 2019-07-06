// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/pages/tpl/App'
import router from '@/pages/tpl/router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
// let serConfig = require("@/config");
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
// Vue.prototype.HOST = serConfig.default().server
// Vue.prototype.STATUS = serConfig.default().status

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
