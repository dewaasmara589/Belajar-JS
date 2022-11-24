const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// Agar file index.html dapat dijalankan
module.exports = {
  publicPath: './'
}