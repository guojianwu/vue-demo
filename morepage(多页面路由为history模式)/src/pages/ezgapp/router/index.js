import Vue from 'vue'
import Router from 'vue-router'
import hellowWorld from  '@/pages/ezgapp/views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/ezgapp',
    routes:[
        {
            path:'/',
            name:'hellowWorld',
            component:hellowWorld
        }
    ]

})

