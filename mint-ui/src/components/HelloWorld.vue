<template>
  <div class="hello">
    <div @click="onDate">{{formatDate1}}</div>
    <datetime-picker
    ref="picker"
    type="date"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    v-model="pickerValue"
    @confirm="confirm">
  </datetime-picker>


    <div @click="onDate2">{{formatDate2}}</div>
    <datetime-picker
    ref="picker2"
    type="datetime"
    
    v-model="pickerValue2"
    @confirm="confirm">
  </datetime-picker>

  </div>
</template>

<script>
import { DatetimePicker } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      pickerValue:new Date(),
      pickerValue2:new Date(),
      formatDate1:"date",
      formatDate2:"date"
    }
  },
  methods: {
    onDate(){
      this.$refs.picker.open();
    },
    onDate2(){
      this.$refs.picker2.open();
    },
    confirm(e){

      // alert(e.getTime())
      console.log(this.formatDate("yyyy-MM-dd hh:mm",e))
      this.formatDate1=this.formatDate("yyyy-MM-dd hh:mm",e)
    },
    formatDate(fmt,date){
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
    DatetimePicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
