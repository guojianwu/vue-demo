<template>
  <div class="loadmore">
    <mt-loadmore :top-method="loadTop"  ref="loadmore" class="loadmore">
      <div>
        <ul
        v-infinite-scroll="loadMore1"
        :infinite-scroll-disabled="loading"
        :infinite-scroll-distance="50">
          <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
        <p> 加载中...</p>
      </div>
      
      <!-- <div slot="top" class="mint-loadmore-top" v-show="loadStatus">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
          </div> -->
    </mt-loadmore>
    
  </div>
</template>
<script>
import Vue from 'vue'

import { Loadmore,InfiniteScroll  } from 'mint-ui';
Vue.use(InfiniteScroll)
export default {
  data() {
    return {
      loadStatus: false,
      topStatus: '',
      list: 100,
      bottomAllLoaded:false,

      loading:false
    };
  },
  methods: {
    loadMore1() {
     if(this.loading)return false;
      this.loading = true;
      setTimeout(() => {
        this.list=this.list+100;
        // let last = this.list[this.list.length - 1];
        // for (let i = 1; i <= 10; i++) {
        //   this.list.push(last + i);
        // }
        this.loading = false;
      }, 2500);
    },
    handleTopChange(status) {
      console.log(status)
    },
    loadTop(e) {
      console.log(111111, e)
      setTimeout(() => {
        this.list=100
        this.$refs.loadmore.onTopLoaded();
      }, 3000)
    },
    bottomStatusChange(e){
      // alert(e)
    },
    bottomMethod(e){
      console.log(e)
      // alert(e)
       setTimeout(() => {
        // this.list=this.list+100;
        // if(this.list>=500){
        //   this.bottomAllLoaded=true;
        // }
        // this.$refs.loadmore.onBottomLoaded();
      }, 3000)

    }
  },
  components: {
    MtLoadmore: Loadmore
  }
};
</script>
<style lang='scss' scoped>

.mint-loadmore{
  // height: 90vh;
  // overflow-y: scroll;
  // padding-bottom: 5rem;
  .mint-loadmore-text{
    color: #696969;
  }
}
</style>
