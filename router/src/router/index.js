import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import systemManage from '@/router/systemManage'
import goodsManage from '@/router/goodsManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    systemManage,
    goodsManage

  ]
})
