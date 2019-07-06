<template>
  <div>
    <input type="file" value="上传图片" @input="beforeUpload" />

    <div class="showCropper-box" v-show="showCropper">
      <div class="hello">
        <!-- 
           :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
         -->
        <vueCropper
         :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedNumber="option.fixedNumber"
          :fixedBox="option.fixedBox"
          :autoCrop="true"
          ref="cropper"
          :img="option.img"
          :outputType="option.outputType"
          :centerBox="option.centerBox"
          :fixed="option.fixed"
          :canMove="option.canMove"
          @imgLoad="imgLoad"
        ></vueCropper>
      </div>

      <div @click="getCropData" class="getCropData">确定</div>
    </div>

    <!-- <img class="outputimg" :src="outputimg" alt /> -->
    <div>
      <img class="outputimg" v-for="(item,index) in imgs" :key="index" :src="item" alt="">
    </div>
    <el-button @click="reCropper" v-show="outputimg" type="primary">重新裁剪</el-button>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
import { regMobile, uuid, getOssToken } from "../until/until";
export default {
  name: "HelloWorld",
  data() {
    return {
      filename:null,
      outputimg: "",
      showCropper: false,
      imgs:[],
      option: {
        img: "",
        outputSize: 1,
        outputType: "png",
        fixedBox: false,
        autoCropWidth: 150,
        autoCropHeight: 150,
        centerBox: true,
        fixed: true,
        canMove: false,
        fixedNumber:[16,9]
      }
    };
  },
  mounted() {},
  methods: {
    imgLoad(){
       this.$toast.clear();
      console.log('imgLoad');
    },
    reCropper() {
      this.showCropper = true;
    },
    beforeUpload(e) {
       this.$toast.loading({
        mask: true,
        message: '加载中...',
        duration:0
      });
      var file = e.srcElement.files[0];
      // console.log(file);
      // return false;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var self = this;
      reader.onload = function(e) {
        // console.log(this.result);
        self.option.img = this.result;
        self.showCropper = true;
      };
    },
    dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURI.split(",")[1]);
      else byteString = unescape(dataURI.split(",")[1]);

      // separate out the mime component
      var mimeString = dataURI
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];

      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], { type: mimeString });
    },
    getCropData() {
      var self = this;
      this.$toast.loading({
        mask: true,
        message: '裁剪中...',
        duration:0
      });
      this.$refs.cropper.getCropBlob(blob => {
        console.log(blob);
        // var blob = this.dataURItoBlob(img);
        var fileExt = "." + blob.type.split("/")[1];
        console.log(blob, fileExt);
        this.outputimg=blob;
        getOssToken
          .call(this, null)
          .then(res => {
            console.log(res);
            let param = new FormData(); // 创建form对象

            var key = "resource/test/avatar/" + uuid() + fileExt;
            param.append("policy", res.policy); // 添加form表单中其他数据
            param.append("host", res.host); // 添加form表单中其他数据
            param.append("OSSAccessKeyId", res.OSSAccessKeyId); // 添加form表单中其他数据
            param.append("success_action_status", "200"); // 添加form表单中其他数据
            param.append("signature", res.signature); // 添加form表单中其他数据
            param.append("expire_time", res.expire_time); // 添加form表单中其他数据
            param.append("key", key); // 添加form表单中其他数据
            param.append("file", blob); // 通过append向form对象添加数据

            let config = {
              headers: { "Content-Type": "multipart/form-data" }
            };
            self.axios.post(res.host, param, config).then(response => {
              console.log(response);
              // this.outputimg = res.host + "/" + key;
              this.imgs.push(res.host + "/" + key)
              this.showCropper = false;
               this.$toast.clear();
            });
          })
          .catch(err => {});
      });
    }
  },
  components: {
    VueCropper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
>>> .vue-cropper{
  background: #000;   
}
.showCropper-box {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.hello {
  /* margin-top: 10px;
  ma */
  width: 100vw;
  height: 94vh;
}

.getCropData {
  /* position: fixed;
  bottom: 0; */
  width: 100vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  color: #fff;
  background: #2196f3;
}
.outputimg {
  width: 100vw;
}
</style>
