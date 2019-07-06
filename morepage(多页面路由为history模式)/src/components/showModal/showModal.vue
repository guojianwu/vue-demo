<template>
	<div class="show-modal" v-if="isShow">
		<div class="mask"></div>
		<div class="content">
			<div class="title">{{title}}</div>
			<div class="btn-box">
				<button class="cancel" @click='onCancel'>取消</button>
				<button class="sure" @click='onSure'>确定</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			title:{
				type:String,
				default:'确定删除该工程吗？'
			}
    },
    data() {
      return {
        isShow:false
      }
    },
		methods:{
      onToggle(){
        this.isShow=!this.isShow;
      },
			onCancel(){
				this.onToggle();
			},
			onSure(){
				this.$emit('eventSure');
			}
		}
	}
</script>
<style lang="scss" scoped>
	.show-modal{
		position: fixed;
		top:0;
		left: 0;
		.mask{
			position: fixed;
			top:0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: #000;
			opacity: 0.6;
		}
		.content{
			position: fixed;
			top:35%;
			left: 50%;
			transform: translateX(-50%);
			width: 370px;
			border-radius: 8px;
			background:#FFF;
			padding: 24px;
			.title{
				font-size: 18px;
				margin-bottom: 50px;
			}
			.btn-box{
				text-align: center;
				button{
					border:none;
					width:106px;
					height:35px;
					font-size:16px;
					border-radius:4px;
					cursor: pointer;
				}
				.cancel{
              background: #fff;
    color: #ff6800;
    margin-right: 15px;
    border: 1px solid #ff6800;
					// background:#EBF4FF;
					// color: #6795EC;
					// margin-right: 15px;
				}
				.sure{
					background:#ff6800;
					color: #fff;
				}
			}
		}
	}
</style>