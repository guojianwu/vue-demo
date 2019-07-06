<template>
  <div>
    <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  created() {
    
  },
  components: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$max-screen-width: 1920px;
  .sold_out_img{
    padding: 80px 0;
    width: 170px;
  }
  .sold_out{
    position: absolute;
    background: #000;
    height: 100%;
    width: 100%;
    opacity: 0.4;
  }
.top-line {
    background: #f2f2f2;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    a{
      text-decoration: none;
      color: #000;
      padding: 6px 12px;
      &:hover{
        color: #ed7020;
      }
    }
    .left{
      float: left;
      display: inline-block;
      padding: 6px 0;
      font-size: 12px;
      .phone_img{
        vertical-align: middle;
      }
      .mobile{
        padding: 0;
        vertical-align: middle;
      }
    }
    .right{
      padding-top: 6px;
      font-size: 12px;
      text-align: right;
      position: relative;
      .list_img{
        vertical-align: middle;
      }
      .cart-num{
        padding: 0;
      }
    }
}
.top-line>.row {
    width: 1250px;
    margin: 0 auto;
}
.col-xs-6 {
    width: 50%;
    display: inline-block;
}
.text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.auto-center {
  margin: 0 auto;
}

.text-start {
  text-align: start;
  // padding-left: 60px;
  text-align: center;
  height: 5px;
}

.banner {
  width: $max-screen-width;
  height: 477px;
  background-image: url("../../../../static/img/pc-banner.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
}
.mainBody {
  width: $max-screen-width;
  background-color: #0c1534;
  padding-top: 22px;
  width: 100%;
  .center-outer-container {
    width: 990px;
    background-color: #202646;
    padding: 30px 0;
    .center-container {
      width: 964px;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      .productList {
        position: relative;
        height: 412px;
        width: 237px;
        list-style: none;
        background-color: white;
        margin: 0px 2px 4px 2px;
        line-height: 0px;
        text-align: center;
        
        p{font-size: 14px}
        .productUrl {
          text-decoration: none;
          color: black;
          .img-container {
            height: 244px;
            background-color: #f6f6f6;
            .productImg {
              max-width: 90%;
              max-height: 90%;
            }
          }
          .productTitle {
            font-size: 14px;
            line-height: 19px;
            margin-bottom: 0;
            padding: 0px 12px;
            width: 90%;
            font-weight: 500;
            margin-top:5px;
          }
          .productModle {
            width: 90%;
            line-height: 26px;
            height: 26px;
            font-size: 14px;
            font-weight: 500;
          }
          .productListPrice {
              color:#4a4a4a;
          }
          .productDiscountPrice {
              color:#4a4a4a;
          }
          .productWholesalePrice {
            font-weight: bolder;
            color: #ff0000;
          }
          .goShopping-box {
            background-color: #fe1b50;
            width: 191px;
            line-height: 37px;
            font-size: 14px;
            color: white;
          }
        }
      }
    }
    .noProductWarning {
      min-height: 370px;
      text-align: center;
      font-size: 20px;
      color: #fcfcfc;
    }
  }
}
</style>
