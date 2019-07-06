const path = require("path");
const webpack = require("webpack");
// 抽取第三方库

module.exports = {
  entry: {
    vendor: [
        "vue/dist/vue.common.js",
        "vue-router",
        "axios",
    ],
    mintUi:[
        "mint-ui"
    ]
  },
  output: {
    path: path.join(__dirname, "../static/js"),
    filename: "[name].dll.js",
    library: "[name]_[hash]" // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, ".", "[name]-manifest.json"),
      // 此处需要和 output.library 的值一致
      name: "[name]_[hash]",
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};