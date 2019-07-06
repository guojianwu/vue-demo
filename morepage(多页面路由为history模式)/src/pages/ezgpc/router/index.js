import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/ezgpc',
    routes:[
        {
            path:'/',
            component: resolve => require(['@/pages/ezgpc/views/container'], resolve),
            children:[
              {
                path:'',
                component: resolve => require(['@/pages/ezgpc/views/home/home'], resolve),
                children:[
                  {
                    path:'',
                    name:'list',
                    component: resolve => require(['@/pages/ezgpc/views/home/list'], resolve),
                    mate:{
                      index:0
                    }
                  },
                  {
                    path:'mylist',
                    name:'mylist',
                    component: resolve => require(['@/pages/ezgpc/views/home/myList'], resolve),
                    meta:{
                      index:1
                    }
                  }
                ]
              },
              {
                path:'release',
                name:'release',
                component: resolve => require(['@/pages/ezgpc/views/release/release'], resolve),
              },
              {
                path:'detail',
                name:'detail',
                component: resolve => require(['@/pages/ezgpc/views/detail/detail'], resolve),
              }
            ]
        }
    ]
    
})

