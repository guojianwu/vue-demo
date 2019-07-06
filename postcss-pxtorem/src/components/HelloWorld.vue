<template>
  <div class="hello">
    <div class="banner"></div>
    <h1 class="msg">{{testCount}}</h1>
    <van-button type="default" @click="setCount(testCount + 1)">默认按钮</van-button>
<van-button type="primary" @click="setCount(testCount - 1)">主要按钮</van-button>

    <van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>

<div class="datetime-picker">
 <van-datetime-picker
  
  v-model="currentDate"
  type="	datetime"
  :min-date="minDate"
  :max-date="maxDate"
   :formatter="formatter"
/>
</div>
 
  </div>
</template>

<script>
import {store,mutation } from '../store/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
        active: 1,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2099, 10, 1),
      currentDate: new Date(),
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    testCount(){
      return store.count;
    }
  },
  methods:{
     setCount: mutation.setCount,
     formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }else if (type === 'hour') {
        return `${value}时`
      }else if (type === 'minute') {
        return `${value}分`
      }
      return value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datetime-picker{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 370px;
}
.msg{
  font-size: 20px;
}
.banner{
  width: 375px;
  background: red;
  height: 10px;
}
</style>
