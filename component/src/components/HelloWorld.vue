<template>
  <div class="hello">
    <el-button @click="notice">默认按钮</el-button>
    <el-button @click="alert">alert</el-button>
    <h1>{{ msg }}</h1>

    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
    <el-button @click="test">默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [
        {
          name: "8831542b9d35.jpg",
          url:
            "https://img.edsmall.com/resource/avatar/9fa7ca73-ab58-48e1-b0b8-8831542b9d35.jpg"
        },
        {
          name: "5f1cdee9e362.jpg",
          url:
            "https://img.edsmall.com/resource/avatar/84bae461-eb05-4a02-8618-5f1cdee9e362.jpg"
        },
        {
          name: "b8988731fa98.jpg",
          url:
            "https://img.edsmall.com/resource/avatar/cc3c2f76-d393-40b0-84d6-b8988731fa98.jpg"
        },
        {
          name: "52a6f8be2c72.jpg",
          url:
            "https://img.edsmall.com/resource/avatar/24000bd0-6a86-4a8d-8f13-52a6f8be2c72.jpg"
        }
      ]
    };
  },
  methods: {
    test(){
      this.fileList.reverse();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    notice() {
      this.$notice({
        message: "密码错误",
        duration: 3000
      });
    },
    alert() {
      this.$myAlert({
        message: "密码错误",
        duration: 30000000
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
