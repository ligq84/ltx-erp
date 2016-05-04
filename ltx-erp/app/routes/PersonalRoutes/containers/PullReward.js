import "./RewardDetail.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import rightArrow from "../../../img/arrow-right.png"
import Tappable from "react-tappable"
import {setCurrentReward,fetchMessageReward,fetchDealReward} from "../actions"



export default class  extends Component {
  constructor(props){
    super(props)
    this._switchCurrent= this._switchCurrent.bind(this)
    document.title = '我要提现';
}




  render() {
    const {location} = this.props
    return (
      <div className="reward-detail">
        <header>
          <Tappable component="div" onTap={this._switchCurrent.bind(this,"ApplyPull")} className={location.pathname=="/pullReward/ApplyPull"?"active":null}>申请提现</Tappable>
          <Tappable component="div"  onTap={this._switchCurrent.bind(this,"PullHistory")} className={location.pathname==="/pullReward/PullHistory"?"active":null}>历史记录</Tappable>
        </header>
        {this.props.children}
      </div>
    )
  }
  _switchCurrent(name){
    this.props.history.pushState(null, '/pullReward/'+name)
  }
}
