webpackJsonp([3],{245:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,c,u=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,l(494);var d=l(3),m=n(d),p=l(11),f=l(6),s=(n(f),l(10)),h=n(s),g=l(75),b=l(14),y=(n(b),l(150)),v=n(y),E=(a=(0,p.connect)(function(e){return{property:e.get("property").get("detail"),isFetching:e.get("property").get("isPropertyFetching")}}),(0,h["default"])(c=a(c=function(e){function t(e){return i(this,t),r(this,Object.getPrototypeOf(t).call(this,e))}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,l=e.location;t((0,g.fetchProperty)(l.query.id))}},{key:"render",value:function(){var e=this.props.isFetching;return console.log(e),m["default"].createElement("div",{className:"property-detail"},e?this.renderIfFetching():this.renderIfComplete())}},{key:"renderIfFetching",value:function(){return m["default"].createElement(v["default"],null)}},{key:"renderIfComplete",value:function(){var e=this.props.property;return console.log(e.toJS()),m["default"].createElement("main",null,m["default"].createElement("section",{className:"item"},m["default"].createElement("h2",null,"基本信息"),m["default"].createElement("div",null,m["default"].createElement("label",null,"楼盘名称"),m["default"].createElement("span",null,e.get("buildname"))),m["default"].createElement("div",null,m["default"].createElement("label",null,"单元号"),m["default"].createElement("span",null,e.get("blockname"))),m["default"].createElement("div",null,m["default"].createElement("label",null,"面积"),m["default"].createElement("span",null,e.get("area"),m["default"].createElement("span",null,"m",m["default"].createElement("sup",null,"2")))),m["default"].createElement("div",null,m["default"].createElement("label",null,"价格"),m["default"].createElement("span",null,e.get("price"))),m["default"].createElement("div",null,m["default"].createElement("label",null,"状态"),m["default"].createElement("span",null,e.get("demandtime")&&new Date(parseInt(e.get("demandtime"))).Format("yyyy-MM-dd"))),m["default"].createElement("div",null,m["default"].createElement("label",null,"备注"),m["default"].createElement("span",null,e.get("rpremark")))))}}]),t}(d.Component))||c)||c);t["default"]=E},119:function(e,t,l){t=e.exports=l(17)(),t.push([e.id,".customer-detail{background-color:#f0f0f0}.customer-detail>main>section.item{background-color:#fff;padding:.3125rem;margin-bottom:.3125rem}.customer-detail>main>section.item>h2{line-height:1.09375rem;margin:0;text-align:left;color:#c80000;font-weight:400}.customer-detail>main>section.item div{text-align:left;height:1.09375rem;border-bottom:1px dashed #ccc;line-height:1.09375rem}.customer-detail>main>section.item div label{color:#646464;font-weight:400;width:2.34375rem;display:inline-block}.customer-detail>main>section.item>ul{position:relative}.customer-detail>main>section.item>ul>div.border{position:absolute;height:auto;left:21px;top:32px;bottom:1.5625rem;border:0;border-left:3px solid #ccc}.customer-detail>main>section.item>ul>li{position:relative;z-index:999;color:#c80000}.customer-detail>main>section.item>ul>li>footer,.customer-detail>main>section.item>ul>li>header{color:#646464;line-height:1.09375rem}.property-detail{background-color:#f0f0f0}.property-detail>main>section.item{background-color:#fff;padding:.3125rem;margin-bottom:.3125rem}.property-detail>main>section.item>h2{line-height:1.09375rem;margin:0;text-align:left;color:#c80000;font-weight:400}.property-detail>main>section.item div{text-align:left;height:1.09375rem;border-bottom:1px dashed #ccc;line-height:1.09375rem}.property-detail>main>section.item div label{color:#646464;font-weight:400;width:2.34375rem;display:inline-block}.property-detail>main>section.item>ul{position:relative}.property-detail>main>section.item>ul>div.border{position:absolute;height:auto;left:21px;top:32px;bottom:1.5625rem;border:0;border-left:3px solid #ccc}.property-detail>main>section.item>ul>li{position:relative;z-index:999;color:#c80000}.property-detail>main>section.item>ul>li>footer,.property-detail>main>section.item>ul>li>header{color:#646464;line-height:1.09375rem}",""])},494:function(e,t,l){var n=l(119);"string"==typeof n&&(n=[[e.id,n,""]]);var i=l(18)(n,{});n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(119,function(){var t=l(119);"string"==typeof t&&(t=[[e.id,t,""]]),i(t)}),e.hot.dispose(function(){i()})}});