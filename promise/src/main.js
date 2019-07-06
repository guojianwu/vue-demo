// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/assets/js/autoScreen'
import '@/assets/css/reset.css';
import '@/assets/css/border.css';
Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.prototype.HOST='/api'   
/* eslint-disable no-new */
let vm= new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
axios.interceptors.response.use((response) => {
	if(response.data.code==406){
    vm.$router.replace({path:'/'})
    return false;
	}
	return response;
},(error) =>{
});