webpackJsonp([1],{248:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,r(499);var u=r(3),s=n(u),p=(r(11),r(5)),f=(n(p),r(9)),d=n(f),m=r(12),h=n(m),y=(0,d["default"])(l=function(e){function t(e){return o(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props.property;return s["default"].createElement(h["default"],{component:"section",onTap:function(r){return e.props.onTap(t)},className:"property"},s["default"].createElement("div",{className:"contact"},t.get("buildname")),s["default"].createElement("div",{className:"company"},t.get("blockname")+t.get("unitnum")),s["default"].createElement("br",null),t.get("numMesg")&&"0"!=t.get("numMesg")?s["default"].createElement("div",{className:"notifiction"},t.get("numMesg")):null,s["default"].createElement("div",{className:"area"},t.get("area"),s["default"].createElement("span",null,"m",s["default"].createElement("sup",null,"2"))),s["default"].createElement("div",{className:"price"},t.get("price"),1==t.get("priceunit")?s["default"].createElement("span",null,"元/",s["default"].createElement("span",null,"m",s["default"].createElement("sup",null,"2"),".天")):2==t.get("priceunit")?s["default"].createElement("span",null,"元/",s["default"].createElement("span",null,"m",s["default"].createElement("sup",null,"2"),".月")):s["default"].createElement("span",null,"元/月")),s["default"].createElement("div",{className:"type"},t.get("statusName")),s["default"].createElement("div",{className:"state-1"},"0"==t.get("checkstatus")?null:"1"===t.get("checkstatus")?"受理通过":"受理未通过"),t.get("infoReward")?s["default"].createElement("div",{className:"state-2"},"推荐红包"):null,t.get("turnoverReward")?s["default"].createElement("div",{className:"state-3"},"成交佣金"):null,s["default"].createElement("div",{className:"time"},t.get("createtime")))}}]),t}(u.Component))||l;t["default"]=y},120:function(e,t,r){t=e.exports=r(16)(),t.push([e.id,".customer{padding:.125rem 0;line-height:.75rem;position:relative;font-size:0;overflow:hidden}.customer>.company,.customer>div.contact{display:inline-block;font-size:.325rem;line-height:.75rem}.customer>div.contact{font-size:.4rem;margin-right:.25rem}.customer>div.notifiction{position:absolute;width:.5rem;height:.325rem;font-size:.25rem;color:#fff;line-height:.325rem;right:0;top:.3rem;text-align:center;border-radius:.1rem;background-color:#ef4f4f}.customer>div.area{width:3.125rem}.customer>div.area,.customer>div.price{display:inline-block;font-size:.325rem;line-height:.75rem}.customer>div.price{width:1.875rem}.customer>div.type{display:inline-block;font-size:.325rem;line-height:.75rem;width:2.25rem;text-align:right;color:#ef4f4f}.customer>span.unit{font-size:.275rem;color:#969696}.customer>.state-1,.customer>.state-2{display:inline-block;line-height:.45rem;background-color:#ec1c4d;font-size:.3rem;color:#fff;margin-right:.125rem;padding:0 .0625rem;vertical-align:center}.customer>.state-2{background-color:#2f9395}.customer>.state-3{color:#fff;background-color:#f16a43}.customer>.state-3,.customer>.time{display:inline-block;line-height:.45rem;background-color:#ec1c4d;font-size:.3rem;margin-right:.125rem;padding:0 .0625rem;vertical-align:center}.customer>.time{color:#fff;background-color:#fff;float:right;font-size:.275rem;color:#969696}.property{font-size:.325rem;padding:.125rem 0;line-height:.75rem;position:relative;font-size:0;overflow:hidden}.property>.company,.property>div.contact{display:inline-block;font-size:.325rem;line-height:.75rem}.property>div.contact{font-size:.4rem;margin-right:.25rem}.property>div.notifiction{position:absolute;width:.5rem;height:.325rem;font-size:.25rem;color:#fff;line-height:.325rem;right:0;top:.3rem;text-align:center;border-radius:.1rem;background-color:#ef4f4f}.property>div.area{width:3.125rem}.property>div.area,.property>div.price{display:inline-block;font-size:.325rem;line-height:.75rem}.property>div.price{width:1.875rem}.property>div.type{display:inline-block;font-size:.325rem;line-height:.75rem;width:2.25rem;text-align:right;color:#ef4f4f}.property>span.unit{font-size:.275rem;color:#969696}.property>.state-1,.property>.state-2{display:inline-block;line-height:.45rem;background-color:#ec1c4d;font-size:.3rem;color:#fff;margin-right:.125rem;padding:0 .0625rem;vertical-align:center}.property>.state-2{background-color:#2f9395}.property>.state-3{color:#fff;background-color:#f16a43}.property>.state-3,.property>.time{display:inline-block;line-height:.45rem;background-color:#ec1c4d;font-size:.3rem;margin-right:.125rem;padding:0 .0625rem;vertical-align:center}.property>.time{color:#fff;background-color:#fff;float:right;font-size:.275rem;color:#969696}",""])},499:function(e,t,r){var n=r(120);"string"==typeof n&&(n=[[e.id,n,""]]);var o=r(17)(n,{});n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(120,function(){var t=r(120);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})},251:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,r(502);var s=r(3),p=n(s),f=r(11),d=r(78),m=r(5),h=(n(m),r(9)),y=n(h),g=r(12),b=n(g),v=r(248),E=n(v),k=(l=(0,f.connect)(function(e){return{propertys:e.get("property").get("datas")}}),(0,y["default"])(c=l(c=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e));return r._toNeedToKnow=r._toNeedToKnow.bind(r),r._handleAddProperty=r._handleAddProperty.bind(r),r._handlePropertyTap=r._handlePropertyTap.bind(r),r}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e((0,d.fetchPropertys)()),document.title="房源推荐列表"}},{key:"render",value:function(){return p["default"].createElement("div",{className:"propertys"},p["default"].createElement(b["default"],{component:"header",onTap:this._toNeedToKnow},"返佣说明"),this.props.propertys.size>0?this.renderList():this.renderNoProperty(),p["default"].createElement(b["default"],{component:"footer",onTap:this._handleAddProperty},"新增推荐"))}},{key:"renderNoProperty",value:function(){return p["default"].createElement("main",{className:"reward"},p["default"].createElement("h3",null,"推荐红包"),p["default"].createElement("p",null,"红包金额：XX元/条"),p["default"].createElement("p",null,"发放流程："),p["default"].createElement("p",null,"信息核实 — 结果反馈 — 用户申请提现 — 每月10日统一发放"),p["default"].createElement("p",null,"发放方式：银行卡转账"),p["default"].createElement("h3",null),p["default"].createElement("p",null,"佣金金额：xx%实得佣金"),p["default"].createElement("p",null,"例如：实得佣金为30000元，返佣比例为10%，成交后合伙人便可获得3000元成交佣金"),p["default"].createElement("p",null,"发放流程："),p["default"].createElement("p",null,"有成交意向的房、客源签订合同 — 客户付款 — 楼天下收到甲方佣金 — 用户申请提现 — 每月10日统一发放"),p["default"].createElement("p",null,"发放方式：银行卡转账"))}},{key:"renderList",value:function(){var e=this;return p["default"].createElement("main",{className:"list"},this.props.propertys.map(function(t,r){return p["default"].createElement(E["default"],{onTap:e._handlePropertyTap,key:r,property:t})}))}},{key:"_toNeedToKnow",value:function(){this.props.history.pushState(null,"/needToKnow")}},{key:"_handleAddProperty",value:function(){this.props.history.pushState(null,"/addProperty")}},{key:"_handlePropertyTap",value:function(e){this.props.history.pushState(null,"/property?id="+e.get("id"))}}]),t}(s.Component))||c)||c);t["default"]=k},123:function(e,t,r){t=e.exports=r(16)(),t.push([e.id,".propertys{font-size:.325rem}.propertys>header{z-index:999;text-align:center;position:fixed;height:1.125rem;width:100%;line-height:1.125rem;background-color:#fddea5;border-bottom:2px solid #ccc}.propertys>main.reward{overflow:hidden;padding:.25rem;padding-top:1.25rem}.propertys>footer{line-height:1.125rem;left:0;right:0;font-size:.375rem;color:#fff;background-color:#ef4f4f;text-align:center;bottom:0;position:fixed;display:block}.propertys>main.list{padding:1.125rem .25rem}.propertys>main.list>section{border-bottom:.025rem dashed #ccc;padding:.125rem 0}",""])},502:function(e,t,r){var n=r(123);"string"==typeof n&&(n=[[e.id,n,""]]);var o=r(17)(n,{});n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(123,function(){var t=r(123);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})}});