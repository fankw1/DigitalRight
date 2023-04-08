const { defineConfig } = require('@vue/cli-service')
const NodePolyfillWebpackPlugin = require("node-polyfill-webpack-plugin");
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins:[
      new NodePolyfillWebpackPlugin()
    ],
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify')
      }
     
    }
  }
})
