// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })
'use strict'
// const path = require('path')
// const defaultSettings = require('./src/settings.js')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

const port = 8032 // 端口
// const name = defaultSettings.title || '空测试项目' // 标题
module.exports = {
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port,
    open: true,
    proxy: {
      [process.env.VUE_APP_URL]: {
      //  接口请求路径
        target: 'http://127.0.0.1:8031/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_URL]: ''
        }
      }
    }
  }

}
