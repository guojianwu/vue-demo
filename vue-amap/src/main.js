// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'
import '@/assets/css/reset.css'
Vue.config.productionTip = false
Vue.use(VueAMap);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
VueAMap.initAMapApiLoader({
  key: '1c035eee5041ad39c91914e58e0ce070',
  plugin: ['AMap.Geolocation'],
  v: '1.4.4'
});
// lazyAMapApiLoaderInstance.load().then(() => {
//   // your code ...
//   this.map = new AMap.Map('amapContainer', {
//     center: new AMap.LngLat(121.59996, 31.197646)
//   });
// });