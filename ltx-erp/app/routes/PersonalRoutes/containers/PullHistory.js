import "./RewardDetail.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import rightArrow from "../../../img/arrow-right.png"
import Tappable from "react-tappable"
import {fetchPullHistory} from "../actions"


@connect((state)=>({
  records:state.getIn(["personal","reward","records"])

}))
export default class  extends Component {
  constructor(props){
    super(props)

}

  componentDidMount(){
    const {dispatch} =this.props
    dispatch(fetchPullHistory(1))

  }


  render() {

    const {records} = this.props

    if(records.size ==0){
      return (
        <div className="other">暂无历史记录</div>
      )

    }else{
      return (
        <div>
        <ul className="pull-history">
          <div className="border"></div>
          {records.map(record=>(
            <li key={record.get("id")}>
              <header>{record.get("time")}</header>
              <footer>
                <span>{record.get("remark")}</span><br/>
                <span>银行卡号：{record.get("bankNum")}</span><br/>
              </footer>
            </li>
          ))}
        </ul>
        <div className="other">
          <span className="notice">
          温馨提示：  </span><br/>
          <span className="notice">1、佣金提取需缴纳12.5%税费； </span><br/>
          <span className="notice">2、截至每月28日（含），合伙人在此之前申请提现，可在次月10日获得返还佣金；若未申请提现，则次月不进行佣金返还。
        （ 若于每月28日后申请提现，该申请将被划归至次月进行处理，即申请人在此后的第三个月10日可获得返还佣金） </span><br/>
          <span className="notice">3、提现申请通过审核后，所获奖励总额将随即减少。 </span><br/>
        </div>
        </div>
      )

    }


  }

}
