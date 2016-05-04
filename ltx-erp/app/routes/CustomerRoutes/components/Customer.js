import './Customer.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"

@pureRender
export default class  extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {customer} = this.props
    console.log(customer.toJS());
    return (
      <Tappable component="section" onTap={event=>this.props.onTap(customer)} className="customer">
        <div className="contact">{customer.get("contact")}</div>
        <div className="company">{customer.get("company")}</div><br/>
        {customer.get("numMesg")&&customer.get("numMesg")!="0"?<div className="notifiction">{customer.get("numMesg")}</div>:null}
        <div className="area">{customer.get("area")}<span>m<sup>2</sup></span></div>
        <div className="price">{customer.get("price")}{customer.get("priceunit")==1?
          <span>元/<span>m<sup>2</sup>.天</span></span>:customer.get("priceunit")==2?
          <span>元/<span>m<sup>2</sup>.月</span></span>:<span>元/月</span>
        }</div>
        <div className="type">{customer.get("demandstatus")}</div>
        <div className="state-1">{customer.get("checkstatus")=="0"?null:customer.get("checkstatus")==="1"?"受理通过":"受理未通过"}</div>
        {customer.get("infoReward")?<div className="state-2">推荐红包</div>:null}
        {customer.get("turnoverReward")?<div className="state-3">成交佣金</div>:null}
        <div className="time">{customer.get("createtime")}</div>
      </Tappable>
    )
  }


}
