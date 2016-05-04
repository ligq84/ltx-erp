import './Property.less'
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
    const {property} = this.props


    return (
      <Tappable component="section" onTap={event=>this.props.onTap(property)} className="property">
        <div className="contact">{property.get("buildname")}</div>
        <div className="company">{property.get("blockname")+property.get("unitnum")}</div><br/>
        {property.get("numMesg")&&property.get("numMesg")!="0"?<div className="notifiction">{property.get("numMesg")}</div>:null}
        <div className="area">{property.get("area")}<span>m<sup>2</sup></span></div>
        <div className="price">{property.get("price")}{property.get("priceunit")==1?
          <span>元/<span>m<sup>2</sup>.天</span></span>:property.get("priceunit")==2?
          <span>元/<span>m<sup>2</sup>.月</span></span>:<span>元/月</span>
        }</div>
        <div className="type">{property.get("statusName")}</div>
        <div className="state-1">{property.get("checkstatus")=="0"?null:property.get("checkstatus")==="1"?"受理通过":"受理未通过"}</div>
        {property.get("infoReward")?<div className="state-2">推荐红包</div>:null}
        {property.get("turnoverReward")?<div className="state-3">成交佣金</div>:null}
        <div className="time">{property.get("createtime")}</div>
      </Tappable>
    )
  }
}
