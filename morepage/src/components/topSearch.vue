<template>
  <div class="top-search">
    <div class="item title">工程定制</div>
    <div class="item input-box">
      <input type="text" class="input" v-model="searchVal" placeholder="搜索工程需求">
      <span class="search-btn" @click="onSearch">搜索</span>
    </div>
    <div class="item need" @click="onDemand">
      <span>发布需求</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchVal:''
    }
  },
  methods:{
    onSearch(){
      this.$emit('eventSearch',this.searchVal)
    },
    onDemand(){
      this.$router.push({
        path:'/release'
      })
      // this.$emit('eventDemand')
    }
  }
};
</script>
<style lang="scss" scoped>
.top-search {
  width: 1220px;
  margin: 20px auto;
  .item {
    display: inline-block;
    vertical-align: middle;
  }
  .title {
    color: #ff6800;
    font-size: 24px;
    font-weight: bold;
  }

  .input-box {
    font-size: 0;
    margin-left: 120px;
    .input {
      border: 1px solid #ff6800;
      width: 450px;
      line-height: 39px;
      font-size: 14px;
      border-radius: 6px 0 0 6px;
      padding-left: 8px;
      outline: none;
    }
    .search-btn {
      background: #ff6800;
      color: #fff;
      display: inline-block;
      line-height: 44px;
      border-radius: 0 6px 6px 0;
      width: 100px;
      text-align: center;
      font-size: 15px;
      cursor: pointer;
    }
  }
  .need {
    float: right;
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