import Vue from 'vue'
import Router from 'vue-router'
import hellowWorld from  '@/pages/tpl/views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/tpl',
    routes:[
        {
            path:'/',
            name:'hellowWorld',
            component:hellowWorld
        }
    ]

})

