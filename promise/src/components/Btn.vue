<template>
	<div class="myBtn">
	    {{btnTxt}}
	</div>
</template>
<script>
	export default {
    props:{
      btnTxt:{
        type:String,
        default:'按钮'
      }
    }

	}
</script>
<style lang="scss" scoped>
.myBtn{
  background: #eb2f2d;
  width: 88vw;
  margin: 0 auto;
  text-align: center;
  line-height: 3rem;
  border-radius:0.2rem;
  background: linear-gradient(#f03a24, #fc5908);
  color: #fff;
  }
</style>
