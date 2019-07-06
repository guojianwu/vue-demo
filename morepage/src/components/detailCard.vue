<template>
  <div class="card">
    <div class="img-box">
      <img src="./../assets/imgs/img.png" class="img">
    </div>
    <div class="info-box">
      <p class="title">
        <span class="title-text">酒店大堂展厅会所水晶灯工程定制酒店大堂酒店大堂展厅会所水晶灯工程定制酒店大堂酒店大堂展厅会所水晶灯工程定制酒店大堂酒店大堂展厅会所水晶灯工程定制酒店大堂酒店大堂展厅会所水晶灯工程定制酒店大堂</span>
        <span class="shenghe">审核已通过</span>
      </p>
      <p class="time">发布时间：2019-04-20 22:02</p>
      <p
        class="jianjie"
      >工程简介工程简介工程简介工程简介工程简介工程简介工简介工程简介工简介工程简介程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程</p>
      <div class="kefu-box">
        <img class="img" src="../assets/imgs/phone.png" alt>
        <span class="phone">客服电话：18814182537</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isMy: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.card {
  font-size: 0;
  height: 230px;
  padding: 20px 0;
  color: #666666;
  // border-bottom: 1px solid #f2f2f2;

  .img-box,
  .info-box {
    display: inline-block;
    vertical-align: top;
  }
  .img-box {
    width: 33%;
    height: 100%;
    position: relative;
    .img {
      max-width: 99%;
      max-height: 99%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .info-box {
    position: relative;
    width: 65%;
    margin-left: 2%;
    font-size: 15px;
    height: 100%;
    .title {
      // font-weight: bold;

      font-size: 18px;
      color: #333339;

      .title-text {
        display: inline-block;
        width: 690px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .shenghe {
        // float:right;
        font-weight: normal;
        color: #ff6800;
        font-size: 15px;
        border: 1px solid #ff6800;
        display: inline-block;
        padding: 8px 0;
        width: 95px;
        text-align: center;
        border-radius: 6px;
      }
    }
    .jianjie {
      font-size: 16px;
      margin: 20px 0;
      line-height: 20px;
      color: #999999;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // display: -webkit-box;
      // -webkit-box-orient: vertical;
      // -webkit-line-clamp: 2;
    }
    .time {
      margin-top: 15px;
    }
    .brand-box {
      font-size: 16px;
      margin-bottom: 20px;
      .brand {
        color: #666666;
      }
      .name {
      }
    }
    .btn-box {
      margin-top: 25px;
      .need {
        display: inline-block;
        background: #ff8633;
        color: #fff;
        line-height: 42px;
        width: 130px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        border-radius: 6px;
        &:hover {
          background: #ff6800;
        }
      }
      .del {
        background: #ccc;
        margin-left: 20px;
        &:hover {
          background: #989898;
        }
      }
    }
    .kefu-box {
      position: absolute;
      bottom: 5px;
      .img,
      .phone {
        display: inline-block;
        vertical-align: middle;
      }
      .img {
        width: 30px;
      }
      .phone {
        line-height: 30px;
        color: #ff6800;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>