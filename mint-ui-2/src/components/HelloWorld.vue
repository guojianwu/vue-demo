<template>
  <div class="hello">
    <div>
      <swipe :auto="4000" :speed="300" :prevent="true"  @change="handleChange">
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
    </swipe>
    </div>

    <range v-model="rangeValue"></range>


    <h1 @click="myToast">myToast</h1>
    <h1 @click="loading">加载</h1>
    <div @click="onDate2">{{date}}</div>
      <datetime-picker
        ref="picker2"
        type="time"
        v-model="pickerValue"
        @confirm="handleConfirm2">
      </datetime-picker>

      <div @click="onDate">{{date2}}</div>
       <datetime-picker
        ref="picker"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="pickerValue2"
        @confirm="handleConfirm">
      </datetime-picker>
  </div>
</template>

<script>
import { DatetimePicker,Swipe, SwipeItem ,Range } from 'mint-ui';
import { Toast,Indicator  } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      rangeValue:10,
      pickerValue:Date(),
      pickerValue2:new Date(),
      date:'date,',
      date2:'date,'
    }
  },
  methods: {
    handleChange(e){
      console.log(e)
    },
    loading(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      });
      setTimeout(()=>{
        Indicator.close();
      },3000)
    },
    myToast(){
      Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000
      });
    },
    onDate(){
      this.$refs.picker.open()
    },
    onDate2(){
      this.$refs.picker2.open()
    },
    handleConfirm(e){
      console.log(this.dateFtt("yyyy-MM-dd hh:mm:ss",e))
      this.date2=this.dateFtt("yyyy-MM-dd",e)
    },
    handleConfirm2(e){
      console.log(e)
      this.date=e;
    },
    dateFtt(fmt,date){
      var o = {   
        "M+" : date.getMonth()+1,                 //月份   
        "d+" : date.getDate(),                    //日   
        "h+" : date.getHours(),                   //小时   
        "m+" : date.getMinutes(),                 //分   
        "s+" : date.getSeconds(),                 //秒   
        "q+" : Math.floor((date.getMonth()+3)/3), //季度   
        "S"  : date.getMilliseconds()             //毫秒   
      };   
      if(/(y+)/.test(fmt))   
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
      for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
      return fmt;   
    }
  },
  components:{
    DatetimePicker,
    Swipe, 
    SwipeItem,
    Range 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe{
  height: 170px;
}
.mint-swipe-item{
  background: #c5bdb1;
}
</style>
