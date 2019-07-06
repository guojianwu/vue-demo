<template>
  <div class="my-wrap">

    <div class="my">
      <div class="info">
        <div class="info-item">
          <p class="title">商家名称</p>
          <p class="name">{{brandUser.merCompany}}</p>
        </div>
        <div class="info-item">
          <p class="title">商家账号</p>
          <p class="name">{{brandUser.merCode}}</p>
        </div>

        <div class="info-item" @click="onShowBrand">
          <p class="title">当前品牌</p>
          <p class="name">
            <span>{{currenBrandName ?currenBrandName:'无'}}</span>
            <img class="btn_left_topback" v-if="brandList.length>=2" :style="showBrand?'transform: rotate(90deg);':'transform: rotate(-90deg);'" src="static/imgs/btn_left_topback.png" alt="">
          </p>
        </div>
        <div class="brand-box2" v-if="brandList.length>=2 && showBrand">
          <ul>
            <li class="brand-item" v-for="(item,index) in brandList" @click="onChooseBrand(index)">{{item.brandName}}</li>
          </ul>

        </div>
        <div class="info-item">
          <p class="title">静态收款码</p>
        </div>
      </div>

      <!-- <div class="stagewrap">
                <v-stage ref="stage" :config="setConfigStage">
                  <v-layer>
                    <v-rect :config="setConfigRectStroke"></v-rect>
                    <v-image :config="configLogo"></v-image>
                    <v-rect :config="setConfigRectFill"></v-rect>
                    <v-text ref="topText" :config="configTopText"></v-text>
                  </v-layer>
                </v-stage>
              </div> -->
      <div class="stagewrap">
        <div class="payCodeImg">
          <img :src="payCodeImg" alt="">
        </div>
        <div v-show="false">
          <div ref="container"></div>
        </div>
        <p class="saveimg">{{brandList.length>0?'长按保存图片':'当前账号没有品牌'}}</p>
      </div>
      <!-- <div ref="container"></div> -->
      <canvas id="rqcode" ref="rqcode"></canvas>

    </div>
    <div class="btn-box" @click="handleLogin">
      <Btn btnTxt="退出登录"></Btn>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import QRCode from 'qrcode'
import Konva from 'konva'
import { MessageBox, Indicator, Toast } from 'mint-ui';
import { checkImgExists } from '@/util/util'
export default {
  data() {
    return {
      brandList: [],
      isHasBrand: false,
      QRCodeSrc: '',
      payCodeImg: '',
      showBrand: false,
      currenBrandName: '',
      currenBrandLogo: '',
      brandUser: {}
    }
  },

  computed: {

  },
  mounted() {
    this.$nextTick(function() {
      // this.createImg();

      this.getBrandList();
    })
  },
  methods: {
    onChooseBrand(index) {
      var data = this.brandList[index];
      this.currenBrandName = data.brandName;
      this.currenBrandLogo = data.logopath;
      this.showBrand = false;
      this.createQrCode(data.qrCodeBody);
    },
    getBrandList() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      });
      this.axios.get(this.HOST + '/brand/listData').then((res) => {
        if (res.data.code == 200) {
          // res.data.data=[]
          this.brandUser = res.data.data.user;
          var data = res.data.data.brands;
          if (data.length == 0) {
            Indicator.close();
            this.isHasBrand = false;
          } else {
            this.isHasBrand = true;
            // data.push(data[0])
            this.currenBrandName = data[0].brandName;
            this.currenBrandLogo = data[0].logopath;

            this.brandList = data;
            this.createQrCode(data[0].qrCodeBody);
          }
        }
      }).catch(() => {
        Indicator.close();
      })
    },
    promiseLoadImg(url, crossOrigin) {
      let promise = new Promise((resolve, reject) => {
        const image = new Image();
        if (crossOrigin) {
          image.crossOrigin = 'Anonymous';
        }
        image.onload = function() {
          resolve(image);
        };

        image.onerror = function() {
          reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
      });
      return promise;
    },
    init() {
      var container = this.$refs['container'];
      var zoom = 3;
      var stageWidth = window.innerWidth * 0.8 * zoom;
      var stageHeight = window.innerWidth * 1 * zoom;
      var stage = new Konva.Stage({
        container: container,
        width: stageWidth,
        height: stageHeight
      });

      var layer = new Konva.Layer();

      var rect = new Konva.Rect({
        x: 0,
        y: 0,
        width: stageWidth,
        height: stageHeight,
        stroke: '#ccc',
        strokeWidth: 1
      });
      var topBg = new Konva.Rect({
        x: 0,
        y: 0,
        width: stageWidth,
        height: stageHeight,
        fill: '#f2f2f2'
      });
      layer.add(topBg);
      layer.add(rect);
      this.promiseLoadImg("static/imgs/logo.png").then((logoImg) => {
        var width = stageWidth * 0.5;
        var height = (width * logoImg.height) / logoImg.width;

        var x = (stageWidth - width) / 2;
        var logo = new Konva.Image({
          x: x,
          y: stageWidth * 0.04,
          image: logoImg,
          width: width,
          height: height
        });

       var topText = new Konva.Text({
          x: stage.getWidth() / 2,
          y: stageWidth * 0.28,
          text: '向' + this.brandUser.merCompany + '付款',
          align: 'center',
          fontSize: stageWidth * 0.058,
          fontStyle: 'bold',
          fill: 'white',
        });
        topText.setOffset({
          x: topText.getWidth() / 2
        });
        var bottomText = new Konva.Text({
          x: stage.getWidth() / 2,
          y: stageWidth * 1.15,
          text: 'E淘分销APP/易掌管APP扫一扫',
          fontSize: stageWidth * 0.05,
          fill: 'white',
        });
        bottomText.setOffset({
          x: bottomText.getWidth() / 2
        });
        var rect2 = new Konva.Rect({
          x: 0,
          y: stageWidth * 0.22,
          width: stageWidth,
          height: stageHeight,
          fill: "red"
        });
        layer.add(logo)
        layer.add(rect2);
        layer.add(topText);
        layer.add(bottomText);

        return this.promiseLoadImg(this.QRCodeSrc);

      }).then((qrcodeImg) => {

        var width = stageWidth * 0.7;
        var height = (width * qrcodeImg.height) / qrcodeImg.width;
        var x = (stageWidth - width) / 2;

        var qrcode = new Konva.Image({
          x: x,
          y: stageWidth * 0.38,
          image: qrcodeImg,
          width: width,
          height: height,
        });
        layer.add(qrcode);
        return this.promiseLoadImg(this.currenBrandLogo, true);
      }).catch((res)=>{
        console.log(res);
      }).then((userImg) => {
        var width = stageWidth * 0.18;
        var height = (width * userImg.height) / userImg.width;
        var x = (stageWidth - width) / 2;

        var user = new Konva.Image({
          x: x,
          y: stageWidth * 0.65,
          image: userImg,
          width: width,
          height: height,
        });
        layer.add(user);
        stage.add(layer);
        var dataURL = stage.toDataURL();
        this.payCodeImg = dataURL;
        Indicator.close();

      }).catch((res)=>{
        stage.add(layer);
        var dataURL = stage.toDataURL();
        this.payCodeImg = dataURL;
        Indicator.close();
      });

    },

    handleLogin() {
      MessageBox({
        title: '提示',
        message: '确定退出登录?',
        showCancelButton: true,
        confirmButtonClass: 'mint-confirm-button',

      }).then(action => {
        if (action == 'confirm') {
          this.loginOut();
        }
      });
      // this.$router.replace({path:'/'})
    },
    loginOut() {
      Indicator.open({
        text: '退出中...',
        spinnerType: 'triple-bounce'
      });
      this.axios.get(this.HOST + '/user/logout').then((res) => {
        Indicator.close();
        if (res.data.code == 200) {
          this.$router.replace({ path: '/login' })
        }
        Toast({
          message: res.data.msg,
          position: 'bottom'
        });
      }).catch(() => {
        Indicator.close();
      })
    },
    onShowBrand() {
      this.showBrand = !this.showBrand;
    },
    createQrCode(url) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      });
      let rqcode = this.$refs.rqcode;
      QRCode.toCanvas(rqcode, url, { errorCorrectionLevel: 'H' }, (error) => {
        var dataURL = rqcode.toDataURL();
        this.QRCodeSrc = dataURL;
        this.init()
      })
    },
  },
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
.btn-box {
  margin-top: 1.5rem;
  margin-bottom: 6rem;
}

.my {
  background: #fff;
  .stagewrap {
    width: 80vw;
    text-align: center;
    margin: 0 auto;
    .saveimg {
      color: #8f949a;
      font-size: 1rem;
      margin-top: 0.8rem;
      padding-bottom: 1rem;
    }
  }
  .info {
    .brand-box2 {
      .brand-item {
        line-height: 3.5rem;
        border-top: 1px solid #f2f2f2;
        text-align: center;
      }
    }
    .info-item {
      overflow: hidden;
      line-height: 3.5rem;
      padding: 0 0.4rem;
      border-top: 1px solid #f2f2f2;

      .title {
        float: left;
        color: #a0a0a0;
      }
      .name {
        float: right;
        color: #454545;
        max-width: 18rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span,
        .btn_left_topback {
          display: inline-block;
          vertical-align: middle;
        }
        .btn_left_topback {
          width: 1.2rem;
          transform: rotate(-90deg);
        }
      }
    }
  }
  .payCodeImg {
    img {
      width: 70vw;
      margin: 0 auto;
    }
  }
  #rqcode {
    position: fixed;
    top: 100rem;
  }
}
</style>
