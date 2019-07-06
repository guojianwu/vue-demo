<template>
  <!-- <div class="area" v-if="showArea"> -->
  <!-- <div class="area-mask"  @click="onArea"></div> -->
  <van-popup v-model="showArea"  position="bottom" >
    <div class="van-area">
      <van-area @cancel="areaCancel" @confirm="areaConfirm" :area-list="areaList"/>
    </div>
  </van-popup>
  

  <!-- </div> -->
</template>

<script>
// import Vue from "Vue"
// import vanArea from 'vant/lib/area';
// import 'vant/lib/button/area';
import areaList from "./../util/area";
export default {
  data() {
    return {
      showArea: false,
      areaList: areaList
    };
  },
  methods: {
    onArea() {
      this.showArea = !this.showArea;
    },
    areaCancel() {
      this.onArea();
    },
    areaConfirm(e) {
      console.log(e);
      this.$emit("eventConfirm", e);
      this.onArea();
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .area {
  width: 100vw;
  top: 0;
  height: 100vh;
  position: fixed;
}
.area-mask {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.6;
}*/
.van-area {
  /* width: 100vw; */
  /* bottom: 0; */
  /* position: fixed; */
} 
</style>
