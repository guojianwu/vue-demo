<template>
	<section class="main">
  <!-- <com-breadcrumb :breadcrumb="breadcrumb"></com-breadcrumb> -->

	<div class="container">线上订单</div>
</section>
</template>

<script>
// import comBreadcrumb from '@/components/common/Breadcrumb'

  export default {
      name: 'xianshang',
      data() {
          return {
            breadcrumb:[]
          }
      },
      components:{
        // comBreadcrumb
      },
      mounted(){
        // this.breadcrumb = this.$route.meta.breadcrumb
      },
      methods: {



      }
  }

</script>

<style scoped>

</style>
