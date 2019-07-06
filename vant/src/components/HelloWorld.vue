<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="pull-refresh">
        <van-pagination 
  v-model="currentPage" 
  :total-items="125" 
  :show-page-size="3" 
  force-ellipses
/>
        <p>刷新次数: {{ count }}</p>
        <p @click="onArea">{{areas?areas:"sss"}}</p>
        <select-area ref="selectArea" @eventConfirm="eventConfirm"></select-area>
        <input type="text" placeholder="sss" v-model="areas" disabled="disabled">

        <van-loading/>
        <van-loading color="white"/>

        <van-loading type="spinner"/>
        <van-loading type="spinner" color="black"/>
        <div @click="sss">sss</div>
        <div @click="aa">aa</div>
        <div @click="ImagePreview">ImagePreview</div>
        <div>
          <van-swipe-cell :right-width="65" :left-width="65">
            <span slot="left">选择</span>
            <van-cell-group>
              <van-cell title="单元格" value="内容"/>
            </van-cell-group>
            <span slot="right">删除</span>
          </van-swipe-cell>
        </div>
              <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
      </div>

    </van-pull-refresh>
  </div>
</template>

<script>
import selectArea from "./selectArea";
export default {
  data() {
    return {
      currentPage:20,
       list: [],
      loading: false,
      finished: false,
      isLoading: false,
      areas: "",
      count: 0
    };
  },
  methods: {
     onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast({
          message: "刷新成功",
          position: "bottom"
        });
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    ImagePreview() {
      this.$imagePreview({
        images: ["https://img.yzcdn.cn/1.jpg", "https://img.yzcdn.cn/2.jpg"],
        startPosition: 1,
        onClose() {
          // do something
        }
      });
    },
    sss() {
      this.$notify({
        message: "通知内容",
        duration: 3000,
        background: "#ff0000"
      });
    },
    aa() {
      this.$toast.loading({
        mask: true,
        message: "加载中...",
        loadingType: "spinner"
      });
    },
    onArea() {
      this.$refs["selectArea"].onArea();
    },
    eventConfirm(e) {
      console.log(e);
      var area = [];
      for (var i = 0; i < e.length; i++) {
        area.push(e[i].name);
      }
      console.log(area.join(" "));
      this.areas = area.join(" ");
    }
  },
  components: {
    selectArea
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pull-refresh {
  min-height: 100vh;
}
</style>
