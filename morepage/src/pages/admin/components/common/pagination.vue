<template>
  <div class="el-pagination">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="sizes,total, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // currentPage: 1
    };
  },
  methods: {
    handleSizeChange(e) {
      this.$emit("eventSizeChange", e);
    },
    handleCurrentChange(e) {
      this.$emit("eventCurrentChange", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-pagination {
  // position: fixed;
  // right: 50px;
  // bottom: 30px;
  text-align: right;
  margin: 8px 0;
}
</style>