<template>
  <div class="publisher">
    <p class="title">发布方</p>
    <div class="publisher-wrap">
      <div class="left">
        <div class="img-box">
          <img class="img" src="../assets/imgs/img.png" alt="">
        </div>
      </div>
      <div class="right">
        <p>经销商名称：汤汤</p>
        <p>客服：杨昌富</p>
        <p>客服电话：18814182537</p>
        <p>联系地址：中山市古镇新兴中路72号华兴灯饰广场</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.publisher {
  .title {
    background: #fafafa;
    line-height: 45px;
    padding-left: 15px;
    border-bottom:1px solid #e4e4e4; 
  }
  .publisher-wrap{
    background: #fafafa;
    .left,.right{
      display: inline-block;
      vertical-align: middle;
    }
    .left{
      .img-box{
        height: 180px;
        width: 250px;
        position: relative;
        .img{
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%,-50%);
          max-width: 80%;
          max-height: 80%;
        }
      }

    }
    .right{
      p{
        margin-bottom: 10px;
        font-size: 15px;
      }
    }

  }
}
</style>