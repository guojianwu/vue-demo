<template>
  <div class="release">
    <div class="base-info-wrap">
      <div class="title-box">
        <span class="react"></span>
        <span class="title">基本工程信息</span>
      </div>
      <div class="input-wrap">
        <span class="name">
          <span class="xing">*</span>工程名称：
        </span>
        <input class="input" type="text" placeholder="请输入工程名称">
      </div>
      <div class="input-wrap">
        <span class="name">
          <span class="xing">*</span>工程简介：
        </span>
        <div class="textarea-box">
          <textarea rows="10" v-model="introduction" class="textarea" placeholder="请输入工程简介"></textarea>
          <p class="length">{{introduction?introduction.length:0}}/120</p>
        </div>
      </div>
      <div class="input-wrap">
        <span class="name text-name">
          <span class="xing">*</span>工程封面：
        </span>
        <div class="textarea-box">
          <span class="text">上传工程封面图，图片不能大于2M</span>
          <div class="upload-box textarea2">
            <el-upload drag action="https://jsonplaceholder.typicode.com/posts/">
              <div class="upload-img" v-if="false">
                <img src="../../../../assets/imgs/img.png" alt>
              </div>
              <div>
                <i class="el-icon-plus"></i>
                <div class="el-upload__text">上传封面图</div>
              </div>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="input-wrap">
        <span class="name text-name">工程详情：</span>
        <div class="textarea-box">
          <span class="text">上传工程详情，单张图片不能大于2M</span>
          <div class="upload-box">
            <div>
              <el-upload drag action="https://jsonplaceholder.typicode.com/posts/">
                <div class="upload-img">
                  <img src="../../../../assets/imgs/img.png" alt>
                </div>
                <div v-if="false">
                  <i class="el-icon-plus"></i>
                  <div class="el-upload__text">上传工程详情图</div>
                </div>
              </el-upload>
              <div class="textarea-box">
                <textarea rows="10" v-model="introduction" class="textarea textarea2"></textarea>
                <p class="length">{{introduction?introduction.length:0}}/120</p>
              </div>
            </div>

            <div class="add-edtail">
              <i class="el-icon-plus"></i>
              <div class="el-upload__text">添加详情图</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="release-info">
      <div class="title-box">
        <span class="react"></span>
        <span class="title">发布方信息</span>
      </div>
      <div class="input-wrap">
        <span class="name name2">
          <span class="xing">*</span>客服：
        </span>
        <input class="input" type="text" placeholder="请输入客服名字">
      </div>
      <div class="input-wrap">
        <span class="name name2">
          <span class="xing">*</span>客服电话：
        </span>
        <input class="input" type="text" placeholder="请输入客服电话">
      </div>
      <div class="input-wrap">
        <span class="name name2">
          <span class="xing">*</span>经销商地址：
        </span>
        <div class="textarea-box">
          <div class="distpicker">
            <distpicker ref="distpicker" :addres="addres"></distpicker>
          </div>
          <textarea
            rows="3"
            placeholder="请输入详细地址"
            v-model="introduction"
            class="textarea textarea2"
          ></textarea>
          <!-- <p class="length">{{introduction?introduction.length:0}}/120</p> -->
        </div>
      </div>
    </div>
    <div class="btn-box">
      <span class="need">提交</span>
      <span class="need cancel">取消</span>
    </div>
  </div>
</template>
<script>
import distpicker from "@/components/distpicker";
export default {
  data() {
    return {
      addres: null,
      introduction: ""
    };
  },
  components: {
    distpicker
  }
};
</script>
<style lang="scss">
.el-input__inner {
  outline: none;
}
.release {
  margin: 25px 0;
  .release-info {
    margin-top: 30px;
  }
  .btn-box {
    margin-top: 40px;
    margin-bottom: 100px;
    text-align: center;
    .need {
      display: inline-block;
      background: #ff8633;
      color: #fff;
      line-height: 42px;
      width: 130px;
      text-align: center;
      font-size: 15px;
      cursor: pointer;
      border-radius: 6px;
      &:hover {
        background: #ff6800;
      }
    }
    .cancel {
      background: #fff;
      color: #ff8633;
      border: 1px solid #ff8633;
      margin-left: 20px;
      &:hover {
        background: #fff;
      }
    }
  }
  .upload-box {
    // margin-left: 10px;
    margin-top: 20px;
    .upload-img {
      height: 180px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .el-icon-plus {
      font-size: 60px;
      color: #ccc;
      margin-top: 40px;
      margin-bottom: 10px;
    }
    .el-upload__text {
      font-size: 15px;
      color: #696969;
    }
  }

  .title-box {
    line-height: 20px;
    height: 20px;
    .title,
    .react {
      vertical-align: top;
      display: inline-block;
    }
    .react {
      width: 4px;
      height: 100%;
      background: #ff6800;
    }
    .title {
      font-weight: bold;
      margin-left: 6px;
    }
  }
  .input-wrap {
    margin-top: 25px;
    .xing {
      color: #ff6800;
      margin-right: 8px;
    }
    .input {
      // margin-left: 10px;
      width: 600px;
      height: 40px;
      line-height: 40px;
      padding-left: 8px;
      border: 1px solid #ccc;
      font-size: 14px;
    }
    .name {
      margin-top: 10px;
      width: 100px;
    }
    .name2 {
      font-size: 14px;
    }
    .text-name {
      margin-top: 0;
    }
    .text {
      color: #8f949a;
    }
    .name,
    .textarea-box,
    .input {
      display: inline-block;
      vertical-align: top;
    }
    .textarea-box {
      display: inline-block;
      position: relative;
      .length {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #8f949a;
      }
      .textarea {
        // margin-left: 10px;
        resize: none;
        width: 600px;
        padding-left: 8px;
        border: 1px solid #ccc;
        font-size: 14px;
        padding-top: 8px;
        word-wrap: break-word;
        line-height: 16px;
      }
      .textarea2 {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
  .add-edtail {
    width: 200px;
    text-align: center;
    border: 1px dashed #ccc;
    height: 120px;
    margin-top: 40px;
    background: #fafafa;
    cursor: pointer;
    .el-icon-plus {
      font-size: 40px;
      margin-top: 25px;
      margin-bottom: 10px;
    }
  }
}
</style>