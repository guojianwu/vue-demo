<template>
  <div class="card">
    <div class="img-box">
      <img src="./../assets/imgs/img.png" class="img">
    </div>
    <div class="info-box">
      <p class="title">酒店大堂展厅会所水晶灯工程定制酒店大堂展厅会所水晶灯工程定制酒店大堂展厅会所水晶灯工程定制酒店大堂展厅会所水晶灯工程定制酒店大堂展厅会所水晶灯工程定制</p>
      <p
        class="jianjie"
      >工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程简介工程</p>
      <p class="brand-box">
        <span class="brand">
          品牌商名称：
          <span class="name">至奢至纯</span>
        </span>
        <span class="brand">
          客服电话：
          <span class="name">18814182537</span>
        </span>
      </p>
      <p class="time">发布时间：2019-04-20 22:02</p>
      <div class="btn-box" v-if="isMy==1">
        <span class="need" @click.stop="onEdit">修改</span>
        <span class="need del" @click.stop="onDel">删除</span>
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
  },
  methods: {
    onEdit() {
      this.$emit("eventEdit");
    },
    onDel() {
      this.$emit("eventDel");
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
  font-size: 0;
  height: 230px;
  padding: 20px 0;
  color: #666666;
  border-bottom: 1px solid #f2f2f2;
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
    width: 65%;
    margin-left: 2%;
    font-size: 15px;
    .title {
      font-weight: bold;
      font-size: 18px;
      color: #333339;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .jianjie {
      font-size: 16px;
      margin: 20px 0;
      line-height: 20px;
      color: #999999;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
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
        background: #ff6800;
        color: #fff;
        line-height: 42px;
        width: 130px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        border-radius: 6px;
        &:hover {
          background: #ff8633;
        }
      }
      .del {
        background: #989898;
        margin-left: 20px;
        &:hover {
          background: #a5a5a5;
        }
      }
    }
  }
}
</style>