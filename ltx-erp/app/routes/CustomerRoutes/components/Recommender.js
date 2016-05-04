import './Recommender.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"
import rightArrow from "../../../img/arrow-right.png"

@pureRender
export default class  extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {recommender,onTap} = this.props
    const isShowModify = this.props.isShowModify==undefined?true:this.props.isShowModify

    return (
      <Tappable component="section" onTap={isShowModify?onTap:null} className="recommender">
        <label>合伙人</label><span>{recommender.get("name")}</span><br/>
        <label>手机</label>
        <span>{recommender.get("tel")}</span>
        <span style={{float:"right",display:isShowModify?"block":"none"}}><span>修改</span><img src={rightArrow}/></span><br/>
        <label>银行卡</label><span>{recommender.get("bankcard")}</span><br/>
      </Tappable>
    )
  }

}
