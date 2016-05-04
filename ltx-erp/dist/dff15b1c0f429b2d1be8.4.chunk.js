webpackJsonp([4],{243:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d,s,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,r(493);var c=r(3),f=n(c),m=r(11),p=r(6),g=(n(p),r(10)),b=n(g),y=r(72),v=r(29),_=r(149),C=n(_),E=r(58),k=n(E),B=r(151),w=n(B),O=r(73),A=r(15),P=n(A),x=r(95),S=(d=(0,m.connect)(function(e){return{city:e.get("city"),recommender:e.get("personal"),property:e.getIn(["property","addDetail"]),isAdding:e.getIn(["property","isAdding"]),buildings:e.getIn(["property","buildings"]),isShowAddResult:e.getIn(["property","isShowAddResult"])}}),(0,b["default"])(s=d(s=function(e){function t(e){i(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e));return r._handleChange=r._handleChange.bind(r),r._handleCityChange=r._handleCityChange.bind(r),r._handleDistrictChange=r._handleDistrictChange.bind(r),r._handleCommChange=r._handleCommChange.bind(r),r._handleAddProperty=r._handleAddProperty.bind(r),r._handlebBuildingChange=r._handlebBuildingChange.bind(r),r._back2Buildings=r._back2Buildings.bind(r),r._goOnBuilding=r._goOnBuilding.bind(r),r.state={blockname:{require:!0,value:"",isError:!1},unitnum:{require:!0,value:"",isError:!1},price:{require:!0,value:"",isError:!1},area:{require:!0,value:"",isError:!1}},r}return l(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e((0,y.fetchCitysIfNeed)()),e((0,v.fetchPersonalIfNeed)())}},{key:"render",value:function(){var e=this.props.city.get("citys"),t=this.props.city.get("districts"),r=this.props.city.getIn(["currentDistrict","comms"]),n=this.props.buildings,a=this.props,i=a.recommender,o=a.property,l=a.isAdding,d=a.isShowAddResult;return f["default"].createElement("div",{className:"add-property"},f["default"].createElement("main",null,f["default"].createElement(C["default"],{label:"城市",options:e,onChange:this._handleCityChange}),f["default"].createElement(C["default"],{label:"区域",options:t,onChange:this._handleDistrictChange}),f["default"].createElement(C["default"],{label:"商圈",options:r,onChange:this._handleCommChange}),f["default"].createElement(C["default"],{label:"楼盘",name:"buildingId",placeholder:r?"请选择":"请先选择城市、区域和商圈",options:n,onChange:this._handlebBuildingChange}),f["default"].createElement(k["default"],{onChange:this._handleChange.bind(this),ref:"blockname",value:this.state.blockname.value,onBlur:this._handleBlur.bind(this),name:"blockname",placeholder:"请输入栋座，如A",isError:this.state.blockname.isError,onFocus:this._handleFocus.bind(this),label:"栋座"}),f["default"].createElement(k["default"],{onChange:this._handleChange.bind(this),ref:"unitnum",value:this.state.unitnum.value,onBlur:this._handleBlur.bind(this),name:"unitnum",placeholder:"请输入单元号，如1001",isError:this.state.unitnum.isError,label:"单元号",onFocus:this._handleFocus.bind(this)}),f["default"].createElement(k["default"],{onChange:this._handleChange.bind(this),ref:"price",value:this.state.price.value,onBlur:this._handleBlur.bind(this),isError:this.state.price.isError,onFocus:this._handleFocus.bind(this),name:"price",label:"价格"}),f["default"].createElement(k["default"],{onChange:this._handleChange.bind(this),ref:"area",value:this.state.area.value,isError:this.state.area.isError,onBlur:this._handleBlur.bind(this),onFocus:this._handleFocus.bind(this),name:"area",label:"面积"}),f["default"].createElement(k["default"],{value:o.get("rpremark"),onBlur:this._handleBlur.bind(this),name:"rpremark",label:"备注"})),f["default"].createElement(w["default"],{recommender:i}),f["default"].createElement("footer",null,f["default"].createElement(P["default"],{style:{backgroundColor:l?"#d63636":"#ef4f4f"},component:"div",onTap:this._handleAddProperty},l?"提交中...":"确认")),f["default"].createElement("div",{className:"bind-modal",style:{display:d?"block":"none"}},f["default"].createElement("main",null,f["default"].createElement("img",{src:x.successImg}),f["default"].createElement("h2",null,"推荐成功"),f["default"].createElement("span",{style:{lineHeight:"0.625rem"}},"继续推荐该楼盘的房源？"),f["default"].createElement("footer",null,f["default"].createElement(P["default"],{className:"cancel",onTap:this._back2Buildings},"返回列表"),f["default"].createElement(P["default"],{className:"save",onTap:this._goOnBuilding},"继续推荐")))))}},{key:"_handleFocus",value:function(e){this.setState(a({},e.target.name,u({},this.state[e.target.name],{isError:!1})))}},{key:"_handleBlur",value:function(e){if(""==!e.target.value){var t=a({},e.target.name,e.target.value);this.props.dispatch((0,O.refreshProperty)(t))}else this.setState(a({},e.target.name,u({},this.state[e.target.name],{isError:!0})))}},{key:"_handleChange",value:function(e){""==e.target.value?this.setState(a({},e.target.name,u({},this.state[e.target.name],{value:"",isError:!0}))):this.setState(a({},e.target.name,u({},this.state[e.target.name],{value:e.target.value})))}},{key:"_handleCityChange",value:function(e){var t=e.target.value;this.props.dispatch((0,y.fetchDistrictsAndComms)(t))}},{key:"_handleDistrictChange",value:function(e){var t=this.props.city.get("districts").find(function(t){return t.get("id")==e.target.value});this.props.dispatch((0,y.setCurrentDsitrict)(t))}},{key:"_handleCommChange",value:function(e){this.props.dispatch((0,O.fetchBuildings)(e.target.value))}},{key:"_handlebBuildingChange",value:function(e){this._handleBlur(e)}},{key:"_handleAddProperty",value:function(){if(!this.props.isAdding){for(var e in this.state)console.log(e),this._handleBlur({target:{name:e,value:this.state[e].value}});setTimeout(function(){var e=this.state,t=e.blockname,r=e.unitnum,n=e.price,a=e.area;t.isError||r.isError||n.isError||a.isError||this.props.dispatch((0,O.addProperty)())}.bind(this))}}},{key:"_back2Buildings",value:function(){this.props.dispatch((0,O.isShowAddResult)(!1)),this.props.history.pushState(null,"/propertys")}},{key:"_goOnBuilding",value:function(){this.props.dispatch((0,O.isShowAddResult)(!1))}}]),t}(c.Component))||s)||s);t["default"]=S},118:function(e,t,r){t=e.exports=r(17)(),t.push([e.id,".add-customer>main{padding:.3125rem}.add-customer>footer{height:1.875rem;padding:.3125rem;border-top:.03125rem solid #ccc}.add-customer>footer>div{height:1.25rem;border-radius:.125rem;background-color:#ef4f4f;text-align:center;color:#fff;line-height:1.25rem;font-size:.5rem}.add-property>main{padding:.3125rem}.add-property>footer{height:1.875rem;padding:.3125rem;border-top:.03125rem solid #ccc}.add-property>footer>div{height:1.25rem;border-radius:.125rem;background-color:#ef4f4f;text-align:center;color:#fff;line-height:1.25rem;font-size:.5rem}.bind-modal{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.5);padding:.46875rem .78125rem 0 .46875rem}.bind-modal>main{text-align:center;font-size:0;line-height:1.40625rem;background-color:#fff;padding:.625rem .3125rem .3125rem}.bind-modal>main>div{line-height:.625rem;font-size:.40625rem}.bind-modal>main>label{font-size:.40625rem;display:inline-block;width:2.1875rem}.bind-modal>main>input{padding-left:.3125rem;font-size:.40625rem;display:inline-block;width:5.625rem;height:1.09375rem;border-radius:8px;border:2px solid #ccc}.bind-modal>main>span{font-size:.40625rem}.bind-modal>main>img{display:block;margin:auto}.bind-modal>main>.get{margin-left:2.1875rem;display:inline-block;height:1.09375rem;line-height:1.09375rem;width:1.875rem;background-color:#ef4f4f;margin-top:.15625rem;border-radius:8px;color:#fff;text-align:center;margin-right:.15625rem}.bind-modal>main>footer{text-align:center;margin-top:.9375rem}.bind-modal>main>footer .cancel{color:#ef4f4f;border:.03125rem solid #ef4f4f;border-radius:.125rem}.bind-modal>main>footer .cancel,.bind-modal>main>footer>.save{text-align:center;display:inline-block;width:3.75rem;height:1.25rem;line-height:1.25rem;font-size:.5rem;background-color:#fff}.bind-modal>main>footer>.save{color:#ef4f4f;border:.03125rem solid #ef4f4f;border-radius:.125rem;color:#fff;background-color:#ef4f4f;margin-left:.3125rem;border:0}",""])},493:function(e,t,r){var n=r(118);"string"==typeof n&&(n=[[e.id,n,""]]);var a=r(18)(n,{});n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(118,function(){var t=r(118);"string"==typeof t&&(t=[[e.id,t,""]]),a(t)}),e.hot.dispose(function(){a()})}});