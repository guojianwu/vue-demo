<template>
  <div>
    <div>
      <top-search @eventSearch="eventSearch" @eventDemand="eventDemand"></top-search>
    </div>
    <div class="nav-wrap">
      <ul class="nav-box">
        <li class="nav-item">公司</li>
        <li class="nav-item">公司</li>
        <li class="nav-item">公司</li>
        <li class="nav-item">公司</li>
      </ul>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import topSearch from "@/components/topSearch"
export default {
  data() {
    return {};
  },
  methods: {
    eventSearch(val){
      console.log(val)
    },
    eventDemand(){
       console.log('val')
    }
  },
  created() {},
  components: {topSearch}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.nav-wrap {
  border-bottom: 1px solid #ff6800;

  .nav-box {
    width: 1220px;
    margin: 20px auto;
    margin-bottom: 8px;
    .nav-item {
      display: inline-block;
      color: #6f6f6f;
      font-size: 16px;
      // font-weight: bold;
      margin-right: 10px;
      cursor: pointer;
    }
    .nav-item:first-child{
      color: #ff6800;
    }
  }
}
.container{
  width: 1220px;
  margin: 0 auto;
}
</style>
