webpackJsonp([10],{244:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,n(99);var i=n(3),c=r(i),s=(n(11),n(5)),p=(r(s),n(9)),f=(r(p),n(24)),d=(r(f),n(12)),h=r(d),y=(n(25),function(e){function t(e){o(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n._switchCurrent=n._switchCurrent.bind(n),document.title="财富中心",n}return u(t,e),a(t,[{key:"render",value:function(){var e=this.props.location;return c["default"].createElement("div",{className:"reward-detail"},c["default"].createElement("header",null,c["default"].createElement(h["default"],{component:"div",onTap:this._switchCurrent.bind(this,"ApplyPull"),className:"/pullReward/ApplyPull"==e.pathname?"active":null},"申请提现"),c["default"].createElement(h["default"],{component:"div",onTap:this._switchCurrent.bind(this,"PullHistory"),className:"/pullReward/PullHistory"===e.pathname?"active":null},"历史记录")),this.props.children)}},{key:"_switchCurrent",value:function(e){this.props.history.pushState(null,"/pullReward/"+e)}}]),t}(i.Component));t["default"]=y}});