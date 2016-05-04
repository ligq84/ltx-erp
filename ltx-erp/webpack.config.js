var path = require('path');
var webpack = require("webpack")
var WebpackMd5Hash = require('webpack-md5-hash');



module.exports = {

    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        chunkFilename: "[chunkhash].[id].chunk.js",
        filename: "[name].js",
    },

    module: {

      loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
      query:{
        presets: ["react","es2015","stage-1"],
        "plugins": [
          ["transform-decorators-legacy"],
        ]
      },
      exclude: /node_modules/
    },{
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.(png|gif)$/,
      loader: 'url-loader?limit=8192'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new  WebpackMd5Hash()
  ]

};
