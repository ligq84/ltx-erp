webpackJsonp([3],{226:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var d=r(3),u=i(d),c=r(5),h=(i(c),r(9)),p=i(h),m=[],f=(0,p["default"])(l=function(e){function t(){return n(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,r=e.label,i=e.name,n=e.className,a=e.placeholder,o=e.value,l=e.errorMessage,s=e.isError,d=this.props.options||m;return u["default"].createElement("section",{className:"default-input "+n},u["default"].createElement("span",null,r),u["default"].createElement("select",{disabled:d===m||0==d.size,name:i,value:o,onChange:t},u["default"].createElement("option",{disabled:!0},a?a:"请选择"),d.map(function(e){return u["default"].createElement("option",{key:e.get("id"),value:e.get("id")}," ",e.get("name"))})),u["default"].createElement("div",{style:{display:s?"block":"none"}},l||"此项为必填"))}}]),t}(d.Component))||l;t["default"]=f},249:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return 0==e?F:1==e?D:2==e?R:void 0}var d,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},h=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,r(500);var p=r(3),m=i(p),f=r(11),g=r(5),b=i(g),y=r(9),v=i(y),E=r(62),_=r(25),k=r(152),C=i(k),w=r(226),x=i(w),B=r(63),P=i(B),O=r(153),I=i(O),S=r(78),j=r(12),q=i(j),N=r(61),A=r(90),T=r(48),z=i(T),F=b["default"].fromJS([{id:1,name:"元/平·天"},{id:2,name:"元/平·月"},{id:3,name:"元/月"}]),D=b["default"].fromJS([{id:4,name:"元/平"}]),R=b["default"].fromJS([{id:1,name:"元/平·天"},{id:2,name:"元/平·月"},{id:3,name:"元/月"},{id:4,name:"元/平"}]),M=(d=(0,f.connect)(function(e){return{city:e.get("city"),recommender:e.get("personal"),property:e.getIn(["property","addDetail"]),isAdding:e.getIn(["property","isAdding"]),buildings:e.getIn(["property","buildings"]),isShowAddResult:e.getIn(["property","isShowAddResult"])}}),(0,v["default"])(u=d(u=function(e){function t(e){a(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e));return r._handleChange=r._handleChange.bind(r),r._handleCityChange=r._handleCityChange.bind(r),r._handleDistrictChange=r._handleDistrictChange.bind(r),r._handleCommChange=r._handleCommChange.bind(r),r._handleAddProperty=r._handleAddProperty.bind(r),r._handlebBuildingChange=r._handlebBuildingChange.bind(r),r._back2Buildings=r._back2Buildings.bind(r),r._goOnBuilding=r._goOnBuilding.bind(r),r._handleNoValidate=r._handleNoValidate.bind(r),r.state={buildingId:{require:!0,value:"",isError:!1},blockname:{require:!0,value:"",isError:!1},unitnum:{require:!0,value:"",isError:!1},price:{require:!0,value:"",isError:!1},area:{require:!0,value:"",isError:!1},ownerTel:{require:!0,value:"",isError:!1}},r}return l(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e((0,E.fetchCitysIfNeed)()),e((0,_.fetchPersonalIfNeed)()),document.title="我有房源",this.props.dispatch((0,E.fetchDistrictsAndComms)(802)),setTimeout(function(){this.props.dispatch((0,S.fetchBuildings)(15))}.bind(this),800),this.setState({buildingId:{require:!0,value:this.props.property.get("buildingId"),isError:!1},blockname:{require:!0,value:this.props.property.get("blockname"),isError:!1},unitnum:{require:!0,value:this.props.property.get("unitnum"),isError:!1},price:{require:!0,value:this.props.property.get("price"),isError:!1},area:{require:!0,value:this.props.property.get("area"),isError:!1},ownerTel:{require:!0,value:this.props.property.get("ownerTel"),isError:!1}})}},{key:"componentWillRecieveProps",value:function(){}},{key:"render",value:function(){var e=this.props.recommender;return e.get("isFetchingPersonal")?this.renderIfFetching():this.renderIfComplete()}},{key:"renderIfFetching",value:function(){return m["default"].createElement(z["default"],null)}},{key:"renderIfComplete",value:function(){var e=this,t=this.props.city.get("citys"),r=this.props.city.get("districts"),i=this.props.city.getIn(["currentDistrict","comms"]),n=this.props.buildings,a=this.props,o=a.recommender,l=a.property,d=a.isAdding,u=a.isShowAddResult,c=o.get("isPerfectInfo");return m["default"].createElement("div",{className:"add-property",ref:"addProperty"},m["default"].createElement("main",null,m["default"].createElement(C["default"],{label:"城市",options:t,onChange:this._handleCityChange}),m["default"].createElement(C["default"],{label:"区域",options:r,onChange:this._handleDistrictChange}),m["default"].createElement(C["default"],{ref:"comms",label:"商圈",options:i,onChange:this._handleCommChange}),m["default"].createElement(x["default"],{label:"楼盘",name:"buildingId",placeholder:i?"请选择":"请先选择城市、区域和商圈",options:n,value:this.state.buildingId.value,isError:this.state.buildingId.isError,onChange:this._handlebBuildingChange}),m["default"].createElement(P["default"],{onChange:this._handleChange.bind(this),ref:"blockname",value:this.state.blockname.value,onBlur:this._handleBlur.bind(this),name:"blockname",placeholder:"请输入栋座，如独栋，A栋",isError:this.state.blockname.isError,onFocus:this._handleFocus.bind(this),label:"栋座"}),m["default"].createElement(P["default"],{onChange:this._handleChange.bind(this),ref:"unitnum",value:this.state.unitnum.value,onBlur:this._handleBlur.bind(this),name:"unitnum",placeholder:"请输入单元号，如1001",isError:this.state.unitnum.isError,label:"单元号",onFocus:this._handleFocus.bind(this)}),m["default"].createElement(C["default"],{value:l.get("status"),name:"status",label:"性质",options:b["default"].fromJS([{id:0,name:"可租"},{id:1,name:"可售"}]),onChange:this._handleNoValidate}),m["default"].createElement(P["default"],{className:"md",onChange:this._handleChange.bind(this),ref:"price",value:this.state.price.value,onBlur:this._handleBlur.bind(this),isError:this.state.price.isError,onFocus:this._handleFocus.bind(this),name:"price",label:"价格"}),m["default"].createElement(C["default"],{className:"sm",value:l.get("priceunit"),name:"priceunit",options:s(l.get("status")),onChange:this._handleNoValidate}),m["default"].createElement(P["default"],{onChange:this._handleChange.bind(this),ref:"area",value:this.state.area.value,isError:this.state.area.isError,onBlur:this._handleBlur.bind(this),onFocus:this._handleFocus.bind(this),name:"area",label:"面积"}),m["default"].createElement(P["default"],{onChange:this._handleChange.bind(this),value:this.state.ownerTel.value,isError:this.state.ownerTel.isError,onBlur:this._handleBlur.bind(this),onFocus:this._handleFocus.bind(this),name:"ownerTel",errorMessage:"请输入正确的手机号",label:"业主电话"}),m["default"].createElement(P["default"],{value:l.get("rpremark"),onChange:this._handleNoValidate.bind(this),onBlur:this._handleNoValidate.bind(this),name:"rpremark",label:"备注"})),m["default"].createElement(I["default"],{isShowModify:!1,onTap:function(t){return e.props.history.pushState(null,"/personalUpdate")},recommender:o}),m["default"].createElement("footer",null,m["default"].createElement(q["default"],{style:{backgroundColor:d?"#d63636":"#ef4f4f"},component:"div",onTap:this._handleAddProperty},d?"提交中...":"确认")),m["default"].createElement(A.Link,{className:"protocol",to:"/protocol"},"确认表示您同意《楼天下合伙经纪人协约》"),m["default"].createElement("div",{className:"bind-modal",style:{display:u&&c?"block":"none"}},m["default"].createElement("main",null,m["default"].createElement("img",{src:N.successImg}),m["default"].createElement("h2",null,"推荐成功"),m["default"].createElement("span",{style:{lineHeight:"0.625rem"}},"继续推荐该楼盘的房源？"),m["default"].createElement("footer",null,m["default"].createElement(q["default"],{className:"cancel",onTap:this._back2Buildings},"返回列表"),m["default"].createElement(q["default"],{className:"save",onTap:this._goOnBuilding},"继续推荐")))))}},{key:"_handleNoValidate",value:function(e){var t=n({},e.target.name,e.target.value);this.props.dispatch((0,S.refreshProperty)(t)),"status"==e.target.name&&1==e.target.value&&this.props.dispatch((0,S.refreshProperty)({priceunit:4}))}},{key:"_handleFocus",value:function(e){this.setState(n({},e.target.name,c({},this.state[e.target.name],{isError:!1})))}},{key:"_handleBlur",value:function(e){if(""==!e.target.value){var t=n({},e.target.name,e.target.value);this.props.dispatch((0,S.refreshProperty)(t))}else this.setState(n({},e.target.name,c({},this.state[e.target.name],{isError:!0})))}},{key:"_handleChange",value:function(e){""==e.target.value?this.setState(n({},e.target.name,c({},this.state[e.target.name],{value:"",isError:!0}))):this.setState(n({},e.target.name,c({},this.state[e.target.name],{value:e.target.value})))}},{key:"_handleCityChange",value:function(e){var t=e.target.value;this.props.dispatch((0,E.fetchDistrictsAndComms)(t)),this.props.dispatch((0,S.cleanBuildings)())}},{key:"_handleDistrictChange",value:function(e){var t=this.props.city.get("districts").find(function(t){return t.get("id")==e.target.value});this.props.dispatch((0,E.setCurrentDsitrict)(t)),this.props.dispatch((0,S.cleanBuildings)())}},{key:"_handleCommChange",value:function(e){this.props.dispatch((0,S.fetchBuildings)(e.target.value))}},{key:"_handlebBuildingChange",value:function(e){this.setState({buildingId:{value:e.target.value}}),this._handleBlur(e)}},{key:"_handleAddProperty",value:function(){if(!this.props.isAdding){for(var e in this.state)this._handleBlur({target:{name:e,value:this.state[e].value}});setTimeout(function(){var e=this.state,t=e.blockname,r=e.unitnum,i=e.price,n=e.area,a=e.buildingId;a.isError||t.isError||r.isError||i.isError||n.isError||(this.props.dispatch((0,S.addProperty)()),this.props.recommender.get("isPerfectInfo")||this.props.history.pushState(null,"/personalUpdate?from=property"),this.refs.addProperty.classList.add("fixed"))}.bind(this))}}},{key:"_back2Buildings",value:function(){this.props.dispatch((0,S.isShowAddResult)(!1)),this.props.history.pushState(null,"/propertys")}},{key:"_goOnBuilding",value:function(){this.props.dispatch((0,S.isShowAddResult)(!1)),this.refs.addProperty.classList.remove("fixed"),this.setState({buildingId:{require:!0,value:"",isError:!1},blockname:{require:!0,value:"",isError:!1},unitnum:{require:!0,value:"",isError:!1},price:{require:!0,value:"",isError:!1},area:{require:!0,value:"",isError:!1},ownerTel:{require:!0,value:"",isError:!1}})}},{key:"componentWillUnmount",value:function(){this.props.dispatch((0,S.isShowAddResult)(!1))}}]),t}(p.Component))||u)||u);t["default"]=M},121:function(e,t,r){t=e.exports=r(16)(),t.push([e.id,".add-customer{font-size:.375rem;overflow:hidden}.add-customer.fixed{position:fixed;height:100%;width:100%}.add-customer>a.protocol{display:block;margin:auto;text-align:center;color:＃666;margin-bottom:20px}.add-customer>main{padding:.3125rem}.add-customer>main input[type=radio]{width:20px;height:20px;border:1px solid #ccc}.add-customer>main>section{line-height:.9375rem;min-height:.9375rem}.add-customer>main>section>span{display:inline-block;width:2.1875rem;height:.9375rem;line-height:.9375rem;font-size:.40625rem;text-align:left}.add-customer>main>section>div[name=ismajor]{display:inline-block}.add-customer>main>section>div[name=ismajor]>label{margin:0 .625rem}.add-customer>footer{height:1.875rem;padding:.3125rem;border-top:.03125rem solid #ccc}.add-customer>footer>div{height:1.25rem;border-radius:.125rem;background-color:#ef4f4f;text-align:center;color:#fff;line-height:1.25rem;font-size:.5rem}.bind-modal{z-index:1000;position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.5);padding:.46875rem .78125rem 0 .46875rem}.add-property{font-size:.375rem;overflow:hidden}.add-property.fixed{position:fixed;height:100%;width:100%}.add-property>a.protocol{display:block;margin:auto;text-align:center;color:＃666;margin-bottom:20px}.add-property>main{padding:.3125rem}.add-property>main input[type=radio]{width:20px;height:20px;border:1px solid #ccc}.add-property>main>section{line-height:.9375rem;min-height:.9375rem}.add-property>main>section>span{display:inline-block;width:2.1875rem;height:.9375rem;line-height:.9375rem;font-size:.40625rem;text-align:left}.add-property>main>section>div[name=ismajor]{display:inline-block}.add-property>main>section>div[name=ismajor]>label{margin:0 .625rem}.add-property>footer{height:1.875rem;padding:.3125rem;border-top:.03125rem solid #ccc}.add-property>footer>div{height:1.25rem;border-radius:.125rem;background-color:#ef4f4f;text-align:center;color:#fff;line-height:1.25rem;font-size:.5rem}.bind-modal{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.5);padding:.46875rem .78125rem 0 .46875rem}.bind-modal>main{vertical-align:top;text-align:center;font-size:0;line-height:1.40625rem;background-color:#fff;padding:.625rem .3125rem .3125rem}.bind-modal>main>div{line-height:.625rem;font-size:.40625rem}.bind-modal>main>label{font-size:.40625rem;display:inline-block;width:2.1875rem}.bind-modal>main>input{padding-left:.3125rem;font-size:.40625rem;display:inline-block;width:5.625rem;height:1.09375rem;border-radius:8px;border:2px solid #ccc}.bind-modal>main>span{font-size:.40625rem}.bind-modal>main>img{display:block;margin:auto}.bind-modal>main>.get{margin-left:2.1875rem;display:inline-block;height:1.09375rem;line-height:1.09375rem;width:1.875rem;background-color:#ef4f4f;margin-top:.15625rem;border-radius:8px;color:#fff;text-align:center;margin-right:.15625rem}.bind-modal>main>footer{text-align:center;margin-top:.9375rem}.bind-modal>main>footer .cancel{color:#ef4f4f;border:.03125rem solid #ef4f4f;border-radius:.125rem}.bind-modal>main>footer .cancel,.bind-modal>main>footer>.save{text-align:center;display:inline-block;width:3.75rem;height:1.25rem;line-height:1.25rem;font-size:.5rem;background-color:#fff}.bind-modal>main>footer>.save{color:#ef4f4f;border:.03125rem solid #ef4f4f;border-radius:.125rem;color:#fff;background-color:#ef4f4f;margin-left:.3125rem;border:0}",""])},500:function(e,t,r){var i=r(121);"string"==typeof i&&(i=[[e.id,i,""]]);var n=r(17)(i,{});i.locals&&(e.exports=i.locals),i.locals||e.hot.accept(121,function(){var t=r(121);"string"==typeof t&&(t=[[e.id,t,""]]),n(t)}),e.hot.dispose(function(){n()})}});