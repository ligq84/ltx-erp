webpackJsonp([2],{235:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o,s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var d=a(3),u=n(d),c=(a(11),a(5)),f=(n(c),a(9)),h=n(f),p=a(12),m=n(p),b=a(62),v=(n(b),(0,h["default"])(o=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={validateCode:""},a}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.tel,n=e.second,l=e.isValidateFetching,r=e.isBind;return u["default"].createElement("div",{className:"bind-modal",style:{display:t||l?"block":"none"}},u["default"].createElement("main",null,u["default"].createElement("h2",null,r?"绑定电话":"解除绑定"),u["default"].createElement("div",{style:{marginBottom:10/64+"rem"}},"已向",u["default"].createElement("span",null,a),"的手机号发送6位验证码，继续",r?"绑定电话":"解除绑定","请输入该验证码并提交。"),u["default"].createElement("label",null,"手机号"),a,u["default"].createElement("span",null),u["default"].createElement("br",null),u["default"].createElement("label",null,"验证码"),u["default"].createElement("input",{type:"tel",value:this.state.validateCode,onChange:this._handleCodeChange.bind(this)}),u["default"].createElement(m["default"],{className:"get",style:{backgroundColor:60==n?"#ef4f4f":"#b3b3b3"},onTap:this._handleReGet.bind(this)},"重新获取"),60==n?null:u["default"].createElement("span",null,u["default"].createElement("span",{style:{color:"red"}},n),"秒后可重新获取"),u["default"].createElement("footer",null,u["default"].createElement(m["default"],{component:"div",className:"cancel",onTap:this._handleCancle.bind(this)},"取消"),u["default"].createElement(m["default"],{component:"div",className:"save",style:{backgroundColor:6===this.state.validateCode.length?"#ef4f4f":"#b3b3b3"},onTap:this._handleSave.bind(this)},l?"正在验证...":"确认"))))}},{key:"_handleCancle",value:function(){this.props.onCancel()}},{key:"_handleSave",value:function(){6===this.state.validateCode.length&&this.props.onSave(this.state.validateCode)}},{key:"_handleReGet",value:function(){60===this.props.second&&this.props.onReGet()}},{key:"_handleCodeChange",value:function(e){this.setState({validateCode:e.target.value})}}]),t}(d.Component))||o);t["default"]=v},236:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o,s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var d=a(3),u=n(d),c=(a(11),a(5)),f=(n(c),a(9)),h=n(f),p=a(12),m=n(p),b=a(62),v=(n(b),a(60)),g=n(v),y=(0,h["default"])(o=function(e){function t(e){return l(this,t),r(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.isValidateFetching,n=e.isValidateSuccess,l=e.onBack,r=e.onRetry,i=e.isBind;return u["default"].createElement("div",{className:"bind-modal",style:{display:t&&!a?"block":"none"}},n?u["default"].createElement("main",null,u["default"].createElement("img",{src:g["default"]}),u["default"].createElement("h2",null,i?"修改成功":"解绑成功"),u["default"].createElement("span",{style:{lineHeight:"0.625rem",display:i?"none":"block"}},"请输入新的11位手机号，并继续完成新手机号的验证，否则解绑无效"),u["default"].createElement("footer",null,u["default"].createElement(m["default"],{className:"save",onTap:l},"知道了"))):u["default"].createElement("main",null,u["default"].createElement("h2",null,"解绑失败"),u["default"].createElement("footer",null,u["default"].createElement(m["default"],{className:"cancel",onTap:l},"返回"),u["default"].createElement(m["default"],{className:"save",onTap:r},"重试"))))}}]),t}(d.Component))||o;t["default"]=y},241:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,d,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,a(498);var f=a(3),h=n(f),p=a(11),m=a(5),b=(n(m),a(9)),v=n(b),g=a(12),y=n(g),_=a(62),k=n(_),E=a(26),w=a(235),S=n(w),R=a(236),C=n(R),B=a(60),O=n(B),T=a(53),P=n(T),x=(s=(0,p.connect)(function(e){return{personal:e.get("personal")}}),(0,v["default"])(d=s(d=function(e){function t(e){r(this,t);var a=i(this,Object.getPrototypeOf(t).call(this,e));return a.state={releaseBindShow:!1,second:60,isShowValidateResult:!1,name:{require:!0,value:"",isError:!1},tel:{require:!0,value:"",isError:!1},bankcard:{require:!0,value:"",isError:!1}},a._reduce=a._reduce.bind(a),a._handleReleaseBindCancel=a._handleReleaseBindCancel.bind(a),a._handleReleaseBindSave=a._handleReleaseBindSave.bind(a),a._handleReleaseBind=a._handleReleaseBind.bind(a),a._handleReGet=a._handleReGet.bind(a),a._releaseResultBack=a._releaseResultBack.bind(a),a._releaseResultRetry=a._releaseResultRetry.bind(a),a._handleSave=a._handleSave.bind(a),a._handleCancel=a._handleCancel.bind(a),a}return o(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.dispatch((0,E.fetchPersonalIfNeed)()),console.log(O["default"]),this.props.personal.get("isPerfectInfo")&&this._props2State(this.props),document.title="合伙人信息"}},{key:"componentWillReceiveProps",value:function(e){this._props2State(e)}},{key:"render",value:function(){var e=this.props.personal;return e.get("isFetchingPersonal")?this.renderIfFetching():this.renderIfComplete()}},{key:"renderIfFetching",value:function(){return h["default"].createElement(P["default"],null)}},{key:"renderIfComplete",value:function(){var e=this.state,t=e.releaseBindShow,a=e.second,n=e.isShowValidateResult,l=e.name,r=e.tel,i=e.bankcard,o=this.props.personal,s=o.get("validate");return h["default"].createElement("div",{className:"personal-update"},h["default"].createElement("section",{style:{display:this.props.location.query.from?"block":"none",textAlign:"center",overflow:"hidden"}},h["default"].createElement("img",{style:{margin:"auto",display:"block",width:"150px",height:"150px"},src:O["default"]}),h["default"].createElement("span",{style:{display:"inline-block",color:"#ef4f4f",fontSize:"18px",padding:"20px"}},"您的推荐信息已提交。请完善个人信息，便于日后发放奖励。")),h["default"].createElement(k["default"],{onChange:this._handleChange.bind(this),value:l.value,onBlur:this._handleBlur.bind(this),isError:l.isError,name:"name",label:"姓名"}),h["default"].createElement(k["default"],{disabled:!s.get("isNeedToValidate"),value:r.value,isError:r.isError,onChange:this._handleChange.bind(this),onBlur:this._handleBlur.bind(this),name:"tel",label:"手机号"},s.get("isNeedToValidate")?null:h["default"].createElement(y["default"],{component:"div",className:"tel-bind",onTap:this._handleReleaseBind},"解绑")),h["default"].createElement(k["default"],{value:i.value,onChange:this._handleChange.bind(this),onBlur:this._handleBlur.bind(this),name:"bankcard",label:"银行卡"}),h["default"].createElement("section",{style:{textAlign:"center",marginBottom:"10px",marginTop:"-20px"}},h["default"].createElement("span",{style:{lineHeight:"30px",display:"inline",width:"100%",fontSize:"18px",color:"#ccc"}},"若非本人持卡，请注明姓名，如6654 XXXX XXXX XXXX，李明")),h["default"].createElement("section",{className:"default-input"},h["default"].createElement("span",null,"邀请人"),s.get("inviter")),h["default"].createElement("footer",null,h["default"].createElement(y["default"],{className:"cancel",onTap:this._handleCancel},"取消"),h["default"].createElement(y["default"],{className:"save",onTap:this._handleSave},"完成")),h["default"].createElement(S["default"],{show:t,tel:r.value,isValidateFetching:o.getIn(["validate","isFetching"]),second:a,onCancel:this._handleReleaseBindCancel,onReGet:this._handleReGet,isBind:s.get("isNeedToValidate"),onSave:this._handleReleaseBindSave}),h["default"].createElement(C["default"],{show:n&&!o.get("isFetchingPersonal"),isBind:!s.get("isNeedToValidate"),isValidateFetching:o.getIn(["validate","isFetching"]),isValidateSuccess:o.getIn(["validate","isSuccess"]),onBack:this._releaseResultBack,onRetry:this._releaseResultRetry}))}},{key:"_handleSave",value:function(){var e=this;["name","tel"].forEach(function(t){e._handleBlur({target:{name:t,value:e.state[t].value}})}),setTimeout(function(){var t=e.state,a=t.name,n=t.tel;t.bankcard;a.isError||n.isError||(e.props.personal.getIn(["validate","isNeedToValidate"])?e._handleReleaseBind():(e.props.dispatch((0,E.refreshPersonal)({name:e.state.name.value,bankcard:e.state.bankcard.value})),e.props.dispatch((0,E.updatePersonal)())))})}},{key:"_handleCancel",value:function(){this._props2State(this.props),this.props.history.goBack()}},{key:"_handleBlur",value:function(e){""==e.target.value?this.setState(l({},e.target.name,u({},this.state[e.target.name],{value:"",isError:!0}))):this.setState(l({},e.target.name,u({},this.state[e.target.name],{isError:!1})))}},{key:"_handleChange",value:function(e){""==e.target.value&&this.state[e.target.name].require?this.setState(l({},e.target.name,u({},this.state[e.target.name],{value:"",isError:!0}))):this.setState(l({},e.target.name,u({},this.state[e.target.name],{value:e.target.value})))}},{key:"_handleReleaseBind",value:function(){this.setState({releaseBindShow:!0}),this._reduceFlag||(this.props.dispatch((0,E.sendValidateCode)(this.state.tel.value)),this._reduce(),this._reduceFlag=!0)}},{key:"_handleReleaseBindCancel",value:function(){this.setState({releaseBindShow:!1})}},{key:"_handleReGet",value:function(){this._reduceFlag||(this._reduce(),this._reduceFlag=!0)}},{key:"_handleReleaseBindSave",value:function(e){this.setState({releaseBindShow:!1,isShowValidateResult:!0}),this.props.personal.getIn(["validate","isNeedToValidate"])?(this.props.dispatch((0,E.refreshPersonal)({name:this.state.name.value,tel:this.state.tel.value,bankcard:this.state.bankcard.value})),this.props.dispatch((0,E.validateCode)(this.state.tel.value,e))):(this.props.dispatch((0,E.refreshPersonal)({name:this.state.name.value,tel:"",bankcard:this.state.bankcard.value})),this.props.dispatch((0,E.validateCode)(this.state.tel.value,e)))}},{key:"_releaseResultBack",value:function(){this.setState({releaseBindShow:!1,isShowValidateResult:!1}),this._resetTime(),console.log(this.props.personal.getIn(["validate","isSuccess"])),this.props.personal.getIn(["validate","isSuccess"])||this.props.dispatch((0,E.fetchPersonal)()),this.props.personal.getIn(["validate","isNeedToValidate"])||this.props.history.pushState(null,"/personalDetail")}},{key:"_releaseResultRetry",value:function(){this.setState({releaseBindShow:!0,isShowValidateResult:!1})}},{key:"_reduce",value:function(){this.state.second>0?(this.setState({second:this.state.second-1}),setTimeout(this._reduce,1e3)):(this.setState({second:60}),this._reduceFlag=!1)}},{key:"_resetTime",value:function(){this.setState({second:0})}},{key:"_props2State",value:function(e){this.setState({name:{value:e.personal.get("name")},tel:{value:e.personal.get("tel")},bankcard:{value:e.personal.get("bankcard")}})}},{key:"componentWillUnmount",value:function(){this._resetTime()}}]),t}(f.Component))||d)||d);t["default"]=x},118:function(e,t,a){t=e.exports=a(16)(),t.push([e.id,".personal-update{padding:.625rem .3125rem 0}.personal-update>footer{display:fixed;height:1.5625rem;width:100%;padding:0 .3125rem .3125rem;position:fixed;left:0;right:0;bottom:0;font-size:0}.personal-update>footer>.cancel{color:#ef4f4f}.personal-update>footer>.cancel,.personal-update>footer>.save{text-align:center;display:inline-block;width:4.53125rem;height:1.25rem;line-height:1.25rem;border:.03125rem solid #ef4f4f;font-size:.5rem;background-color:#fff;border-radius:.125rem}.personal-update>footer>.save{color:#ef4f4f;color:#fff;background-color:#ef4f4f;margin-left:.3125rem}.personal-update .tel-bind{padding-left:0;height:.9375rem;width:1.875rem;border-radius:.125rem;line-height:.9375rem;background-color:#ef4f4f;font-size:.40625rem;color:#fff;text-align:center}.bind-modal,.personal-update .tel-bind{z-index:999;position:absolute;right:0;top:0}.bind-modal{left:0;bottom:0;background-color:rgba(0,0,0,.5);padding:.46875rem .78125rem 0 .46875rem}.bind-modal>main{font-size:0;line-height:1.40625rem;background-color:#fff;padding:.625rem .3125rem .3125rem}.bind-modal>main>div{line-height:.625rem;font-size:.40625rem}.bind-modal>main>label{font-size:.40625rem;display:inline-block;width:2.1875rem}.bind-modal>main>input{padding-left:.3125rem;font-size:.40625rem;display:inline-block;width:5.625rem;height:1.09375rem;border-radius:8px;border:2px solid #ccc}.bind-modal>main>span{font-size:.40625rem}.bind-modal>main>img{display:block;margin:auto}.bind-modal>main>.get{margin-left:2.1875rem;display:inline-block;height:1.09375rem;line-height:1.09375rem;width:1.875rem;background-color:#ef4f4f;margin-top:.15625rem;border-radius:8px;color:#fff;text-align:center;margin-right:.15625rem}.bind-modal>main>footer{text-align:center;margin-top:.9375rem}.bind-modal>main>footer .cancel{color:#ef4f4f;border:.03125rem solid #ef4f4f;border-radius:.125rem}.bind-modal>main>footer .cancel,.bind-modal>main>footer>.save{text-align:center;display:inline-block;width:3.75rem;height:1.25rem;line-height:1.25rem;font-size:.5rem;background-color:#fff}.bind-modal>main>footer>.save{color:#ef4f4f;border:.03125rem solid #ef4f4f;border-radius:.125rem;color:#fff;background-color:#ef4f4f;margin-left:.3125rem;border:0}",""])},498:function(e,t,a){var n=a(118);"string"==typeof n&&(n=[[e.id,n,""]]);var l=a(18)(n,{});n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(118,function(){var t=a(118);"string"==typeof t&&(t=[[e.id,t,""]]),l(t)}),e.hot.dispose(function(){l()})}});