<template>
  <div class="login">
    <div class="img">
      <img class="img-eds" src="/static/img/eds.png" alt="">
      <!-- <p class="title">EDS商学院管理系统</p> -->
    </div>
    <div class="bg_login_box">
      <img class="bg_login" src="/static/img/bg_login_1.png" alt="">

      <div class="inputs">
        <p class="login-title">欢迎登录</p>
        <p class="bottom-border"></p>
        <div class="input-box">
          <div class="input-wrap">
            <p class="tip" v-if="seepass && !account">{{accountTip}}</p>
            <img class="icon" src="static/img/img_my_zh.png" alt="">
            <input type="text" v-model="account" @keyup.enter="handleLogin" placeholder="请输入账号">
          </div>
          <!-- <p>1111</p> -->
          <!-- <img class="error-icon" src="@/assets/imgs/error.png" alt="" v-show="error"> -->
        </div>

        <div class="input-box">
          <div class="input-wrap">
            <p class="tip" v-if="seepass  && !password">{{passwordTip}}</p>
            <img class="icon" src="static/img/img_my_pass.png" alt="">
            <input type="password" v-model="password" @keyup.enter="handleLogin"  placeholder="请输入密码" />
          </div>

          <!-- <img  class="error-icon" :src="seepass?'static/img/btn_passsee_0.png':'static/img/btn_passsee_1.png'" @click="onSeePass"> -->
        </div>
        <div class="input-box">
          <div class="input-wrap">
            <p class="tip" v-if="seepass && !captcha">{{captchaTip}}</p>
            <img class="icon" src="static/img/img_yanzhenma.png" alt="">
            <input type="text" v-model="captcha" @keyup.enter="handleLogin"  placeholder="请输入验证码" />
            <img class="captcha" :src="captchaSrc" @click="onCaptcha" ref="captcha">
          </div>
        </div>
        <div class="btn-box" @click="handleLogin">
          <p class="login-btn">登录</p>
        </div>
      </div>

    </div>

    <div class="company">
      <p>中山市艾文凯迪网络科技有限公司</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      seepass: false,
      error: true,
      account: '',
      password: '',
      accountTip: '',
      passwordTip: '',
      captchaTip: '',
      captcha: '',
      captchaSrc: '',
      uuid: ''
    }
  },
  computed: {
    // captcha(){
    // 	return this.HOST+'/sys/captcha.jpg'
    // }
  },
  mounted() {
    this.onCaptcha();
  },
  components: {

  },

  methods: {
    S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },
    guid() {
      return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4());
    },
    onCaptcha() {
      var uuid = this.guid();
      this.captchaSrc = this.HOST + '/sys/captcha.jpg?uuid=' + uuid;
      this.uuid = uuid;
    },
    handleLogin() {
      var account = this.account.trim();
      var password = this.password.trim();
      var captcha = this.captcha.trim();

      //  this.$message.error('错了哦，这是一条错误消息');
      this.seepass = true;
      this.accountTip = account == '' ? '请输入账号' : '';
      this.passwordTip = password == '' ? '请输入密码' : '';
      this.captchaTip = captcha == '' ? '请输入验证码' : '';
      if (account == '' || password == '' || captcha == "") {
        return false;
      }
      const loading = this.$loading({
        lock: true,
        text: '登录中',
        // spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      // if (password == '') {
      // 	this.passwordTip='请输入密码';
      // 	this.seepass=true;
      // 	return false;
      // }

      this.axios.post(this.HOST + '/sys/login', {
        username: account,
        pwd: password,
        captcha: captcha,
        uuid: this.uuid
      }).then((res) => {
        loading.close();
        if (res.data.code == 200) {
          this.axios.defaults.headers.common['token'] = res.data.data.token;
          localStorage.setItem('info', JSON.stringify(res.data.data));

          this.$router.replace({ path: '/' })
        } else {
          this.$message.error(res.data.message);
        }

      }).catch(() => {
      })
      //this.$router.replace({path:'/gather/'})
    },
    onSeePass() {
      this.seepass = !this.seepass;
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  //   width: 100vw;
  //   height: 100%;
  // width: 800px;
  min-width: 1060px;
  background: #fff;
  .company {
    text-align: center;
    margin-top: 50px;
    color: #848484;
  }
  .bg_login_box {
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    .bg_login {
      display: block;
      width: 100%;
      max-height: 696px;
    }
  }

  .img {
    // padding:20vw 20vw 6vw;
    // text-align: center;
    .img-eds{
      padding: 21px 0;
    }
    // margin-left: 300px;
    margin-left: 15.625%;
    img {
      max-width: 100%;
    }
    .title {
      font-size: 30px;
      line-height: 120px;
    }
  }
  .inputs {
    // margin:9vw auto;
    position: absolute;
    background: #fff;
    // top: 125px; // transform: translateY(-50%);
    top:10%;
    right: 10%;
    width: 40%;
    max-width: 490px;
    min-width: 430px;
    box-shadow: 0px 0px 7px 0px #fff;
    padding: 15px 0;
    .login-title {
      text-align: center;
      font-size: 30px;
    }
    .bottom-border {
      width: 90px;
      border-radius: 10px;
      height: 2px;
      background: #1890ff;
      margin: 5px auto;
    }
    .btn-box {
      .login-btn {

        margin: 0 auto;
        margin-top: 7%;
        line-height: 60px;
        color: #fff;
        font-size: 22px;
        width: 80%;
        border-radius: 10px;
        text-align: center;
        background: #1890ff;
        cursor: pointer;
      }
    }
  }
  .input-box {
    position: relative;
    width: 80%; // margin:3vw auto 6vw;
    // padding-bottom: 1vw;
    margin: 0 auto;
    border-bottom: 1px solid #dcdcdc; // background :#000;
    margin-top: 5%;
    .input-wrap {
      position: relative;
      .tip {
        position: absolute;
        top:-10px;
        color: red;
      }
    }

    .icon,
    .error-icon {
      width: 20px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .captcha {
      position: absolute;
      top: -10px;
      right: 0;
      cursor: pointer;
    }
  }
  span {
    padding: 0 2vw
  }
  input {
    width: 300px; // padding: 2vw;
    border: none;
    font-size: 16px;
    padding: 10px 0;
  }
}
</style>
