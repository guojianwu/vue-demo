<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                  {
                      icon: 'iconfont icon-gongyingshang',
                      index: '/home',
                      title: '供应工程审核'
                  },
                   {
                      icon: 'iconfont icon-ziyuanxuqiu',
                      index: '/demand',
                      title: '需求工程审核'
                  },
                  // {
                  //     icon: 'iconfont icon-weibiaoti104',
                  //     index: '/order',
                  //     title: '订单管理',
                  //     subs: [
                  //       {
                  //         index: '/order/etao',
                  //         title:'E淘订单',
                  //         subs:[
                  //           {
                  //             index: '/order/etao/xianshang',
                  //             title:'线上订单'
                  //           },
                  //           {
                  //             index: '/order/etao/saomafu',
                  //             title:'扫码付订单'
                  //           },
                  //           {
                  //             index: '/order/etao/xianxiashouyin',
                  //             title:'线下收银订单'
                  //           },
                  //           {
                  //             index: '/order/etao/jiadianguan',
                  //             title:'家电馆订单'
                  //           },
                  //           {
                  //             index: '/order/etao/huiyuanzhuanxiang',
                  //             title:'会员专享订单'
                  //           },
                  //         ]
                  //       },
                  //       {
                  //         index: '/order/eds',
                  //         title:'EDS会员商城订单',
                  //         subs:[
                  //           {
                  //             index: '/order/eds/xianshang',
                  //             title:'线上订单'
                  //           },
                  //           {
                  //             index: '/order/eds/saomafu',
                  //             title:'扫码付订单'
                  //           },
                  //         ]
                  //       },
                  //       {
                  //         index: '/order/eds2',
                  //         title:'EDS商城精选订单',
                  //         subs:[
                  //           {
                  //             index: '/order/eds2/xianshang',
                  //             title:'线上订单'
                  //           },
                  //         ]
                  //       },
                  //     ]
                  // },
                  // {
                  //     icon: 'iconfont icon-cangku',
                  //     index: '/product',
                  //     title: '商品管理',
                  //     subs: [
                  //       {
                  //         index:'/product/store',
                  //         title:'商品库'
                  //       },
                  //       {
                  //         index:'/product/new',
                  //         title:'新建商品'
                  //       },
                  //       {
                  //         index:'/product/etao',
                  //         title:'E淘商品管理',
                  //         subs: [
                  //           {
                  //             index: "/product/etao/whole",
                  //             title: "全网销售"
                  //           },
                  //           {
                  //             index: "/product/etao/area",
                  //             title: "区域销售"
                  //           },
                  //           {
                  //             index: "/product/etao/areatpl",
                  //             title: "区域模板管理"
                  //           }
                  //         ]
                  //       },
                  //       {
                  //         index:'/product/eds',
                  //         title:'会员商城商品管理'
                  //       },
                  //       {
                  //         index:'/product/eds2',
                  //         title:'精选商城商品管理'
                  //       },
                  //       {
                  //         index:'/product/activity',
                  //         title:'活动商品管理'
                  //       },
                  //     ]
                  // },
                  // {
                  //   icon:'iconfont icon-yingxiao',
                  //   index: '/sale',
                  //   title: '营销管理',
                  //   subs: [
                  //     {
                  //       index: '/sale/brand',
                  //       title: '品牌推广'
                  //     },
                  //     {
                  //       index: '/sale/recommend',
                  //       title: '商品推荐'
                  //     },
                  //     {
                  //       index: '/sale/stock',
                  //       title: '库存预警'
                  //     },
                  //   ]
                  // },
                  // {
                  //   icon:'iconfont icon-fuhao-shangdian',
                  //   index: '/project',
                  //   title: '工程定制',
                  //   subs: [
                  //     {
                  //       index: '/project/issue',
                  //       title: '发布的工程'
                  //     },
                  //     {
                  //       index: '/project/receive',
                  //       title: '接单的工程'
                  //     }
                  //   ]
                  // },
                  // {
                  //   icon:'iconfont icon-yduigerenzhongxinxuanzhong',
                  //   index: '/person',
                  //   title: '个人中心',
                  //   subs: [
                  //     {
                  //       index: '/person/pay',
                  //       title: '支付管理'
                  //     },
                  //     {
                  //       index: '/person/service',
                  //       title: '客服管理'
                  //     },
                  //     {
                  //       index: '/person/msn',
                  //       title: '消息管理',
                  //       subs: [
                  //         {
                  //           index: '/person/msn/etao',
                  //           title: 'E淘'
                  //         },
                  //         {
                  //           index: '/person/msn/eds',
                  //           title: '会员商城'
                  //         },
                  //         {
                  //           index: '/person/msn/eds2',
                  //           title: '精选商城'
                  //         },
                  //       ]
                  //     },
                  //     {
                  //       index: '/person/key',
                  //       title: '密码管理'
                  //     },
                  //     {
                  //       index: '/person/notice',
                  //       title: '放假通知'
                  //     },
                  //     {
                  //       index: '/person/help',
                  //       title: '帮助中心',
                  //       subs: [
                  //         {
                  //           index: '/person/help/product',
                  //           title: '关于商品说明'
                  //         },
                  //         {
                  //           index: '/person/help/area',
                  //           title: '可售区域说明'
                  //         },
                  //         {
                  //           index: '/person/help/price',
                  //           title: '价格说明'
                  //         },
                  //         {
                  //           index: '/person/help/stock',
                  //           title: '库存说明'
                  //         },
                  //         {
                  //           index: '/person/help/deal',
                  //           title: '交货期说明'
                  //         },
                  //         {
                  //           index: '/person/help/recommend',
                  //           title: '商品推荐说明'
                  //         },
                  //       ]
                  //     }
                  //   ]
                  // },
                  ]

      };
    },
  computed: {
    onRoutes() {
      // return this.$route.path.replace("/", "");
      return this.$route.path
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 240px;
}
.sidebar > ul {
  height: 100%;
}
.el-submenu__title span,
.el-submenu__title i {
  color: #fff;
}
</style>
