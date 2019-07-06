import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base:'/admin',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: 'EDS供货商平台' },
            children:[
              {
                path: '/404',
                component: resolve => require(['../components/page/404.vue'], resolve),
                meta: { title: '404' }
            },
            {
                path: '/403',
                component: resolve => require(['../components/page/403.vue'], resolve),
                meta: { title: '403' }
            },
            {
              path: '/home',
              component: resolve => require(['../components/page/supply/Supply.vue'], resolve),
              meta: { title: '供应工程审核' }
            },
            {
              path: '/demand',
              component: resolve => require(['../components/page/demand/Demand.vue'], resolve),
              meta: { title: '需求工程审核' }
            },
                // {Demand
                //     path: '/dashboard',
                //     component: resolve => require(['../components/page/com/Dashboard.vue'], resolve),
                //     meta: { title: '系统首页' }
                // },
                // {
                //     path: '/icon',
                //     component: resolve => require(['../components/page/com/Icon.vue'], resolve),
                //     meta: { title: '自定义图标' }
                // },
                // {
                //     path: '/table',
                //     component: resolve => require(['../components/page/com/BaseTable.vue'], resolve),
                //     meta: { title: '基础表格' }
                // },
                // {
                //     path: '/tabs',
                //     component: resolve => require(['../components/page/com/Tabs.vue'], resolve),
                //     meta: { title: 'tab选项卡' }
                // },
                // {
                //     path: '/form',
                //     component: resolve => require(['../components/page/com/BaseForm.vue'], resolve),
                //     meta: { title: '基本表单' }
                // },
                // {
                //     // 富文本编辑器组件
                //     path: '/editor',
                //     component: resolve => require(['../components/page/com/VueEditor.vue'], resolve),
                //     meta: { title: '富文本编辑器' }
                // },
                // {
                //     // markdown组件
                //     path: '/markdown',
                //     component: resolve => require(['../components/page/com/Markdown.vue'], resolve),
                //     meta: { title: 'markdown编辑器' }
                // },
                // {
                //     // 图片上传组件
                //     path: '/upload',
                //     component: resolve => require(['../components/page/com/Upload.vue'], resolve),
                //     meta: { title: '文件上传' }
                // },
                // {
                //     // vue-schart组件
                //     path: '/charts',
                //     component: resolve => require(['../components/page/com/BaseCharts.vue'], resolve),
                //     meta: { title: 'schart图表' }
                // },
                // {
                //     // 拖拽列表组件
                //     path: '/drag',
                //     component: resolve => require(['../components/page/com/DragList.vue'], resolve),
                //     meta: { title: '拖拽列表' }
                // },
                // {
                //     // 拖拽Dialog组件
                //     path: '/dialog',
                //     component: resolve => require(['../components/page/com/DragDialog.vue'], resolve),
                //     meta: { title: '拖拽弹框' }
                // },
                // {
                //     // 权限页面
                //     path: '/permission',
                //     component: resolve => require(['../components/page/com/Permission.vue'], resolve),
                //     meta: { title: '权限测试', permission: true }
                // },
               
                // // 订单管理-E淘订单
                // {
                //   path: '/order/etao/frmorderdetail',
                //   name:'/order/etao/frmorderdetail',
                //   component: resolve => require(['../components/page/order/etao/frmOrderDetail.vue'], resolve),
                //   meta: { title: '订单详情' }
                // },
                // {
                //   path: '/order/etao/refundProcessing',
                //   component: resolve => require(['../components/page/order/etao/refundProcessing.vue'], resolve),
                //   meta: { title: '退款订单处理' }
                // },
                // {
                //   path: '/order/etao/xianshang',
                //   component: resolve => require(['../components/page/order/etao/XianShang.vue'], resolve),
                //   meta: { title: 'E淘线上订单' }
                // },
                // {
                //   path: '/order/etao/saomafu',
                //   component: resolve => require(['../components/page/order/etao/SaoMaFu.vue'], resolve),
                //   meta: { title: 'E淘扫码付订单' }
                // },
                // {
                //   path: '/order/etao/xianxiashouyin',
                //   component: resolve => require(['../components/page/order/etao/XianXiaShouYin.vue'], resolve),
                //   meta: { title: 'E淘线下收银订单' }
                // },
                // {
                //   path: '/order/etao/jiadianguan',
                //   component: resolve => require(['../components/page/order/etao/JiaDianGuan.vue'], resolve),
                //   meta: { title: 'E淘家电馆订单' }
                // },
                // {
                //   path: '/order/etao/huiyuanzhuanxiang',
                //   component: resolve => require(['../components/page/order/etao/HuiYanZhuanXiang.vue'], resolve),
                //   meta: { title: 'E淘会员专享订单' }
                // },
                // // 订单管理-Eds订单
                // {
                //   path: '/order/eds/xianshang',
                //   component: resolve => require(['../components/page/order/eds/XianShang.vue'], resolve),
                //   meta: { title: 'EDS线上订单' }
                // },
                // {
                //   path: '/order/eds/saomafu',
                //   component: resolve => require(['../components/page/order/eds/SaoMaFu.vue'], resolve),
                //   meta: { title: 'EDS扫码付订单' }
                // },
                //  // 订单管理-Eds2订单
                //  {
                //   path: '/order/eds2/xianshang',
                //   component: resolve => require(['../components/page/order/eds2/XianShang.vue'], resolve),
                //   meta: { title: 'EDS2线上订单' }
                // },
                // // 商品管理
                // {
                //   path: '/product/store',
                //   component: resolve => require(['../components/page/product/ProductStore.vue'], resolve),
                //   meta: { title: '商品库' }
                // },
                // {
                //   path: '/product/new',
                //   component: resolve => require(['../components/page/product/New.vue'], resolve),
                //   meta: { title: '新建商品' }
                // },
                // {
                //   path: '/product/etao',
                //   component: resolve => require(['../components/page/product/Etao.vue'], resolve),
                //   meta: { title: 'E淘商品管理' }
                // },

                // {
                //   path: '/product/etao/whole',
                //   component: resolve => require(['../components/page/product/etao/WholeSale.vue'], resolve),
                //   meta: {
                //      title: '全网销售',
                //      breadcrumb:['商品管理','E淘商品管理','全网销售']
                //     }
                // },
                // {
                //   path: '/product/etao/area',
                //   component: resolve => require(['../components/page/product/etao/AreaSale.vue'], resolve),
                //   meta: { title: '区域销售' ,
                //   breadcrumb:['商品管理','E淘商品管理','区域销售']}
                // },
                // {
                //   path: '/product/etao/areatpl',
                //   component: resolve => require(['../components/page/product/etao/AreaTplManage.vue'], resolve),
                //   meta: { title: '区域模板管理',
                //   breadcrumb:['商品管理','E淘商品管理','区域模板管理']}
                // },

                // {
                //   path: '/product/eds',
                //   component: resolve => require(['../components/page/product/Eds.vue'], resolve),
                //   meta: { title: '会员商城商品管理' }
                // },
                // {
                //   path: '/product/eds2',
                //   component: resolve => require(['../components/page/product/Eds2.vue'], resolve),
                //   meta: { title: '精选商城商品管理' }
                // },
                // {
                //   path: '/product/activity',
                //   component: resolve => require(['../components/page/product/Activity.vue'], resolve),
                //   meta: { title: '活动商品管理' }
                // },
                // // 营销管理
                // {
                //   path: '/sale/brand',
                //   component: resolve => require(['../components/page/sale/Brand.vue'], resolve),
                //   meta: { title: '品牌推广' }
                // },
                // {
                //   path: '/sale/recommend',
                //   component: resolve => require(['../components/page/sale/Recommend.vue'], resolve),
                //   meta: { title: '商品推荐' }
                // },
                // {
                //   path: '/sale/stock',
                //   component: resolve => require(['../components/page/sale/Stock.vue'], resolve),
                //   meta: { title: '库存预警' }
                // },
                // // 工程定制
                // {
                //   path: '/project/issue',
                //   component: resolve => require(['../components/page/project/Issue.vue'], resolve),
                //   meta: { title: '发布的工程' }
                // },
                // {
                //   path: '/project/receive',
                //   component: resolve => require(['../components/page/project/Receive.vue'], resolve),
                //   meta: { title: '接单的工程' }
                // },
                // // 个人中心
                // {
                //   path: '/person/pay',
                //   component: resolve => require(['../components/page/person/Pay.vue'], resolve),
                //   meta: { title: '支付管理' }
                // },
                // {
                //   path: '/person/service',
                //   component: resolve => require(['../components/page/person/Service.vue'], resolve),
                //   meta: { title: '客服管理' }
                // },
                // // 个人中心-消息管理
                // {
                //   path: '/person/msn/etao',
                //   component: resolve => require(['../components/page/person/msn/Etao.vue'], resolve),
                //   meta: { title: '消息管理-E淘' }
                // },
                // {
                //   path: '/person/msn/eds',
                //   component: resolve => require(['../components/page/person/msn/Eds.vue'], resolve),
                //   meta: { title: '消息管理-会员商城' }
                // },
                // {
                //   path: '/person/msn/eds2',
                //   component: resolve => require(['../components/page/person/msn/Eds2.vue'], resolve),
                //   meta: { title: '消息管理-精选商城' }
                // },
                // {
                //   path: '/person/key',
                //   component: resolve => require(['../components/page/person/Key.vue'], resolve),
                //   meta: { title: '密码管理' }
                // },
                // {
                //   path: '/person/notice',
                //   component: resolve => require(['../components/page/person/Notice.vue'], resolve),
                //   meta: { title: '放假通知' }
                // },
                // // 个人中心-帮助中心
                // {
                //   path: '/person/help/product',
                //   component: resolve => require(['../components/page/person/help/Product.vue'], resolve),
                //   meta: { title: '帮助中心-关于商品说明' }
                // },
                // {
                //   path: '/person/help/area',
                //   component: resolve => require(['../components/page/person/help/Area.vue'], resolve),
                //   meta: { title: '帮助中心-可售区域说明' }
                // },
                // {
                //   path: '/person/help/price',
                //   component: resolve => require(['../components/page/person/help/Price.vue'], resolve),
                //   meta: { title: '帮助中心-价格说明' }
                // },
                // {
                //   path: '/person/help/stock',
                //   component: resolve => require(['../components/page/person/help/Stock.vue'], resolve),
                //   meta: { title: '帮助中心-库存说明' }
                // },
                // {
                //   path: '/person/help/deal',
                //   component: resolve => require(['../components/page/person/help/Deal.vue'], resolve),
                //   meta: { title: '帮助中心-交货期说明' }
                // },
                // {
                //   path: '/person/help/recommend',
                //   component: resolve => require(['../components/page/person/help/Recommend.vue'], resolve),
                //   meta: { title: '帮助中心-商品推荐说明' }
                // },


                // {
                //     path: '/template',
                //     component: resolve => require(['../components/page/ProductTpl.vue'], resolve),
                //     meta: { title: '商品属性模板' }
                // },
                // {
                //   path: '/goods',
                //   component: resolve => require(['../components/page/GoodsTpl.vue'], resolve),
                //   meta: { title: '商品管理' }
                // },

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve),
            meta:{
              unRequiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
