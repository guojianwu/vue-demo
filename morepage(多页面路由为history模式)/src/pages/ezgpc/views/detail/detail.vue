<template>
  <div class="edtail">
    <detail-card></detail-card>
    <publisher></publisher>
    <div class="edtail-wrap">
      <p class="title">工程详情</p>
      <div class="edtail-box">
        <div class="item">
          <p class="text">参考造价：30万元| 风格：混搭| 空间：三居| 面积：130平米</p>
          <div class="img-box">
            <img
              class="img"
              src="http://192.168.0.55/301ghsys/%E4%BE%9B%E8%B4%A7%E5%95%86%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9FV1.1.5/images/%E5%B7%A5%E7%A8%8B%E8%AF%A6%E6%83%85/u282.png"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import detailCard from "@/components/detailCard";
import publisher from "@/components/publisher";
export default {
  components: {
    detailCard,
    publisher
  }
};
</script>
<style lang="scss" scoped>
.edtail {
  
  .edtail-wrap {
    margin-top: 15px;
    .title {
      background: #fafafa;
      line-height: 45px;
      padding-left: 15px;
    }
    .edtail-box {
      border: 1px solid #f2f2f2;
      padding-bottom: 40px;
      .item {
        width: 1000px;
        margin: 0 auto;
        .text {
          margin: 20px 0;
        }
        .img-box {
          // text-align: center;
          width: 100%;
          .img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
