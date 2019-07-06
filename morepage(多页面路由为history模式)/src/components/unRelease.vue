<template>
  <div class="unRelease">
    <div>
      <img src="../assets/imgs/unRelease.png" alt>
    </div>
    <p class="text">{{text}}</p>
    <div>
      <span class="need">去发布需求</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "暂无工厂发布工程定制供应"
    }
  }
};
</script>
<style lang="scss" scoped>
.unRelease {
  text-align: center;
  margin: 100px 0;
  .text{
    margin: 20px 0 50px;
    color: #999999;
  }
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
}
</style>