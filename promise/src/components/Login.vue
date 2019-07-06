<template>
<div class="login">
  <div class="img">
    <img src="@/assets/imgs/logo.png" alt="">
  </div>
  <div class="inputs">
    <div class="input-box">
      <img class="icon" src="@/assets/imgs/img_my_zh.png" alt="">
      <input type="text" v-model="account" placeholder="供货商账号">
      <!-- <img class="error-icon" src="@/assets/imgs/error.png" alt="" v-show="error"> -->
    </div>
    <div class="input-box">
      <img class="icon" src="@/assets/imgs/img_my_pass.png" alt="">
      <input :type="seepass?'text':'password'" v-model="password" placeholder="密码"/>
      <img  class="error-icon" :src="seepass?'static/imgs/btn_passsee_0.png':'static/imgs/btn_passsee_1.png'" @click="onSeePass">
    </div>
  </div>
  <div class="btn-box" @click="handleLogin">
    <Btn btnTxt="登录"></Btn>
  </div>
</div>
</template>

<script>
import Btn from '@/components/Btn'
import {trim} from '@/util/util'
import { Toast,Indicator } from 'mint-ui';
export default {
  name:"Login",
  data(){
    return{
      seepass:false,
      error:true,
      account:'',
      password:''
    }
  },
  components:{
    Btn
  },
  methods: {
    handleLogin(){
      var account=trim(this.account);
      var password=trim(this.password);
      if(account==''){
        Toast({
          message: '请输入用户名',
          position: 'bottom'
        });
        return false;
      }
      if(password==''){
        Toast({
          message: '请输入密码',
          position: 'bottom'
        });
        return false;
      }
       Indicator.open({
          text: '登录中...',
          spinnerType: 'triple-bounce'
        });
      this.axios.post(this.HOST+'/user/login',{
        merCode:account,
        merUserPwd:password
      }).then((res)=>{
        Indicator.close();
        if(res.data.code==200){
          this.$router.replace({path:'/my'})
        }else{
          Toast({
            message: res.data.msg,
            position: 'bottom'
          });
        }

      }).catch(()=>{
         Indicator.close();
      })
      //this.$router.replace({path:'/gather/'})
    },
    onSeePass(){
      this.seepass= !this.seepass;
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100vw;
  height: 100%;
  background: #fff;
  .img{
    padding:20vw 20vw 6vw;
    text-align : center;
    img{
      max-width : 100%;
    }
  }
  .inputs{
    margin:9vw auto;
  }
  .input-box{
    width:88vw;
    margin:3vw auto 6vw;
    padding-bottom: 1vw;
    border-bottom:1px solid #dcdcdc;
    // background :#000;
    .icon,.error-icon{
      width:6vw;
      vertical-align: middle
    }
    .error-icon{

    }
  }
  span{
    padding:0 2vw
  }
  input{
    width : 69vw;
    padding: 2vw;
    border: none;
    font-size: 4vw;
  }
}
</style>
