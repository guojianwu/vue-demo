<template>
  <div>
    <mt-index-list  class="mt-index-section" :height="440">
      <mt-index-section  v-for="(item,index) in list" :index="item" :key="index">
        <mt-cell v-for="(i,index) in 10" :title="item+'Aaron'" :key="i"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import { IndexList, IndexSection,Cell } from 'mint-ui';
export default {
  data(){
    return {
      list:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      height:window.innerHeight*0.85
    }
  },
  components: {
    MtIndexSection:IndexSection,
    MtIndexList:IndexList,
    MtCell:Cell
  }
}
</script>
<style lang="scss">
.mt-index-section{
  touch-action: none;
  position: fixed;
  bottom: 0;
  // min-height: 80vh;

  // .mint-indexlist-content{
  //   min-height: 80vh;
  // }
}
</style>
