import Vue from 'vue'
import '@/assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../../pages/admin/assets/css/icon.css';
import App from './App'
import router from './router'
import axios from 'axios'
// import './components/common/directives';
// import "babel-polyfill";

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;
Vue.prototype.HOST="/api";

// var info =localStorage.getItem('info')==""? "":JSON.parse(localStorage.getItem('info'));
// var token=info&&info.token?info.token:'';
// if(token==""){
//   router.replace({
//     path:'/login'
//   })
// }
// axios.defaults.headers.common['token'] = token;
// axios.interceptors.response.use((response) => {
// 	if(response.data.code==401){
// 		router.replace({
// 			path:'/login'
// 		})
// 	}
// 	return response;
// },(error) =>{
// });


// router.beforeEach((to, from, next) => {

//   if (to.matched.some(record => record.meta.unRequiresAuth)) {
//     next()
//   } else {
//     var info = localStorage.getItem('info') == "" ? "" : JSON.parse(localStorage.getItem('info'));
//     if (info && info.token) {
//       next();
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   }


// })

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         } else {
//             next();
//         }
//     }
// })

// 注册全局自定义指令
// Vue.directive('focusNext',{
//   inserted: (el, obj) => {
//     if(obj.value) {
//       el.focus()
//     }
//   },
//   componentUpdated: (el,obj) => {
//     console.log(obj);
//     if(obj.value) {
//       el.focus()
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
