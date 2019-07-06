<template>
  <div>
    <div v-if="true">
      <div v-for="(item,index) in 10" :key="index"  @click="toDetail('1')">
        <card :isMy="1" @eventEdit="eventEdit" @eventDel="eventDel"></card>
      </div>
    </div>
    <div v-if="false">
      <un-release></un-release>
    </div>
    <show-modal ref="showModal"></show-modal>
  </div>
</template>
<script>
import card from "@/components/card";
import unRelease from "@/components/unRelease";
export default {
  methods:{
    eventEdit(){

    },
    eventDel(){
       this.$confirm('确定删除该工程?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          confirmButtonClass:"confirm-button",
          cancelButtonClass:"cancel-button"
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      // this.$refs['showModal'].onToggle()
    },
    toDetail(){
      this.$router.push({
        path:"/detail"
      })
    }
  },
  components: {
    card,
    unRelease
  }
};
</script>
<style scoped>

</style>