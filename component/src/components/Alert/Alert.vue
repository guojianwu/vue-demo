<template>
  <transition  name="bounce">
    <div class="notice">
      <div class="mask"></div>
      <div class="mycontent"  v-show="visible">
        <p class="title">{{ message }}</p>
        <div class="btn-box">
           <el-button @click="btn1">默认按钮</el-button>
  <el-button type="primary" @click="btn2">主要按钮</el-button>
        </div>
      </div>
      <!-- <div class="content">{{ message }}</div> -->
      
    </div>
  </transition>
</template>

<script>
export default {
  name: "notice",
  data() {
    return {
      visible: false,
      message: "",
      duration: 3000
    };
  },
  methods: {
    btn1(){
      console.log('btn1')
    },
    btn2(){
      console.log('btn2')
    },
    setTimer() {
      setTimeout(() => {
        // this.close(); // 3000ms之后调用关闭方法
      }, this.duration);
    },
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
      }, 500);
    }
  },
  mounted() {
    // this.setTimer(); // 挂载的时候就开始计时，3000ms后消失
  }
};
</script>
<style scoped>

.el-message-fade-enter,
.el-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
.bounce-enter-active {
  animation: bounce-in 1s ease; 
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(0,50%);
    /* opacity: 0; */
    /* transform: scale(0); */
  }
  /* 50% {
    transform: translateY(0%);
  } */
  100% {
   transform: translate(0,0%);
   /* opacity: 1; */
  }
}
.notice {
  position: fixed;
  top: 0;
  /* margin: 0 auto; */
  /* transform: translateX(-50%); */
  /* left: 50%; */
  /* background: #1ac721; */
  /* width: 100vw; */
  /* text-align: center; */
  /* height: 35px;
  line-height: 35px; */
  /* color: #fff; */
  font-size: 16px;
  /* border-radius:4px;  */
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
}
.mycontent{
  position: fixed;
  top: 30%;
  left: 50%;
  background: #fff;
  /* display: flex; */
  /* top: 50%; */
  width: 400px;
  padding: 20px;
  transform: translateX(-50%);
  /* height: 200px; */
  
}
.title{
  text-align: center;
  margin: 40px 0;
}
.btn-box{
  text-align: right;
}
.content {
}
</style>