<template>
  <div>
  <div class="switch-wrap">
    <div  v-for="item in switchList" :class="active==item.id?'active switch-box':'switch-box'" @click="onSwitch(item.id,item.route)">
      <div><img :src="active==item.id?item.chooseImg:item.unChooseImg"/></div>
      <p>{{item.text}}</p>
    </div>
  </div>
  <div class="gather">
      <router-view/> 
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      switchList:[
        {
          id:0,
          text:'收款',
          chooseImg:'/static/imgs/img_sk_0.png',
          unChooseImg:'/static/imgs/img_sk_1.png',
          route:'/'
        },
        {
          id:1,
          text:'收款记录',
          chooseImg:'/static/imgs/img_fk_0.png',
          unChooseImg:'/static/imgs/img_fk_1.png',
          route:'/list'
        },
        {
          id:2,
          text:'我的',
          chooseImg:'/static/imgs/img_my_0.png',
          unChooseImg:'/static/imgs/img_my_1.png',
          route:'/my'
        },
      ],
      active:0
    }
  },
   mounted(){
    this.$nextTick(function () {
      this.active=this.$route.meta.index;
    })
  },
 
  methods:{
    onSwitch(num,route){
      this.active=num;
      	this.$router.push({path:route})
    }
  },
}
</script>

<style lang="scss" scoped>
// #app{
//   margin-bottom: 20vw;
// }
.switch-wrap{
  z-index: 99;
  background: #fff;
	position: fixed;
	bottom: 0;
	width: 100vw;
	font-size: 0;
	text-align: center;
	border-top:1px solid #f2f2f2; 
	box-shadow:0 -2px 3px -1px #f3f3f3;
  display: flex;

	.switch-box{
		display: inline-block;
		// width: 50%;
    color: #565656;
    flex: 1;
		box-sizing: border-box;
		font-size: 0.9rem;
		padding: 0.6rem 0;
		img{
			width: 1.6rem;
		}
    p{
      margin-top: 0.3rem;
    }

	}
	.active{
		color: #FF2300;
	}

}
.gather{
  padding-bottom: 4.5rem;
}
</style>
