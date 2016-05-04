var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');
var pathToReduxRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');
var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
    chunkFilename: "[chunkhash].[id].chunk.js"
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
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.jpg$/,
      loader: 'file-loader'
    },{
      test: /\.(png|gif)$/,
      loader: 'url-loader?limit=8192'}]
  },
  plugins: [
  
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      //inject: true,
      template: 'index-template.html',
      //templateContent: "<div id='root'></div>"
    }), //https://github.com/ampedandwired/html-webpack-plugin 此处可配置
    new webpack.HotModuleReplacementPlugin(),
    new WebpackMd5Hash()
  ]
};

module.exports = config;
