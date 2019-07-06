import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import My from '@/components/My'
import Loadmore from '@/components/Loadmore'
import IndexList from '@/components/IndexList'
import loading from '@/components/loading'
import mylogin from '@/components/mylogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: mylogin
    },
    {
      path: '/my',
      name: 'my',
      component:loading
    }
  ]
})
