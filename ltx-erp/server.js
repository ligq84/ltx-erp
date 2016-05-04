var config = require("./webpack.config.js");
var webpack = require("webpack")
var webpackDevServer=require("webpack-dev-server")
config.entry.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);





var server = new webpackDevServer(compiler, {
  contentBase: "build",
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
        '/api/*': {
            target: 'http://120.55.125.236:8098/',
            // port: "80",
            secure: false
        },

        '/renren/*': {
            target: 'http://120.55.125.236:8055/',
            //  target: 'http://192.168.88.14:8080/',

            // port: "80",
            secure: false
        },
        // '/recommendsResourcePeople/*': {
        //     target: 'http://120.55.125.236:8055/',
        //     // port: "80",
        //     secure: false
        // },
        // '/rewardInfo/*': {
        //     target: 'http://120.55.125.236:8055/',
        //     // port: "80",
        //     secure: false
        // },
        // '/rewardApplyLog/*': {
        //     target: 'http://120.55.125.236:8055/',
        //     // port: "80",
        //     secure: false
        // },
        // '/recommendsResource/*': {
        //     target: 'http://120.55.125.236:8055/',
        //     // port: "80",
        //     secure: false
        // },
        // '/recommendsUnit/*':{
        //   target: 'http://120.55.125.236:8055/',
        //   // port: "80",
        //   secure: false
        // }

    }

});

server.listen(8080);
