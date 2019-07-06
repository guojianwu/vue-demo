<template>
  <div>
    <div v-if="true">
      <div v-for="(item,index) in 10" :key="index" @click="toDetail('1')">
        <card></card>
      </div>
    </div>
    <div v-if="false">
      <un-release></un-release>
    </div>
  </div>
</template>
<script>
import card from "@/components/card";
import unRelease from "@/components/unRelease";
export default {
  methods:{
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
<style lang="scss" scoped>
</style>