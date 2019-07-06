// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notice from './components/Notice/index.js'
import Alert from './components/Alert/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(Notice);
Vue.use(Alert);
Vue.use(ElementUI);
/* eslint-disable no-new Alert */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
