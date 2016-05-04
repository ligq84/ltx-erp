import 'babel-polyfill'
import React from 'react'
import "normalize.css"
import "./main.less"
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router,browserHistory } from 'react-router'
import App from './containers/App'
import store from './store/configureStore'
// import createHistory from 'history/lib/createHashHistory'


Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}







  const rootRoute = {
    component: 'div',
    childRoutes: [ {
      path: '/',
      component: App,
      childRoutes: [
        ...require('./routes/PropertyRoutes'),
        ...require('./routes/CustomerRoutes'),
        ...require('./routes/PersonalRoutes')
      ]
    } ]
  }





render(
  (<Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>),
  document.getElementById('root')
)
