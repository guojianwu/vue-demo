<template>
  <div class="home">
    <div class="img-box">
      <img src="../../asset/bg.png" alt>
    </div>
    <div class="nav-box">
      <div :class="active==0?'nav-item active':'nav-item'" @click="changeList('0','/')">
        供应列表
      </div>
       <div :class="active==1?'nav-item active':'nav-item'"  @click="changeList('1','/mylist')">
        我的发布
      </div>
    </div>
    <div class="list-wrap">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0
    }
  },
  mounted(){
    console.log(this.$route)
    this.active=this.$route.meta.index||0;
  },
  methods:{
    changeList(active,router){
      this.active=active;
      this.$router.push({
        path:router
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .img-box {
    img {
      width: 1220px;
      display: block;
    }
  }
  .nav-box{
    background: #f2f2f2;
    .nav-item{
      font-size: 14px;
      display: inline-block;
       padding: 20px 50px;
       cursor: pointer;
    }
    .active{
      background: #fff;
      border-bottom:2px solid  #ff6800;
      color: #ff6800;
    }
  }
}
</style>