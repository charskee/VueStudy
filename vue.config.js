const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, // 关闭语法检查
  pages:{
    index:{
      // 入口文件
      entry:'01_src_ref属性/main.js'
    }
  }
})
