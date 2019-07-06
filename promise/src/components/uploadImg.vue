<template>
	<div>
		<input type="file" @change="onChange">
	</div>
</template>
<script>
export default {
	methods: {
		onChange(e) {
			console.log(e)
			console.log(e.target.files[0])
			let config = {
				headers: { 'Content-Type': 'multipart/form-data' }
			}
			let param = new FormData()
			param.append('coverImage', e.target.files[0]); // 添加form表单中其他数据
			param.append('aa', '123'); // 添加form表单中其他数据
			this.axios.post('/api/fileUpload',param,config).then((res)=>{
				console.log(res)

			})
		}
	},
}
</script>

