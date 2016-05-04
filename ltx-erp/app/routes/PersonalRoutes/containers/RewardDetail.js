import "./RewardDetail.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import rightArrow from "../../../img/arrow-right.png"
import Tappable from "react-tappable"
import {setCurrentReward,fetchMessageReward,fetchDealReward} from "../actions"


@connect((state)=>({
  reward:state.getIn(["personal","reward"])

}))
export default class  extends Component {
  constructor(props){
    super(props)
    this._switchCurrent= this._switchCurrent.bind(this)
}

  componentDidMount(){
    const {dispatch} =this.props
    dispatch(fetchMessageReward())
    dispatch(fetchDealReward())
    document.title = '财富记录';

  }


  render() {

    const {reward} = this.props
    const current = reward.get(reward.get("current"))



    return (
      <div className="reward-detail">
        <header>
          <Tappable component="div" name="message" onTap={this._switchCurrent.bind(this,"message")} className={reward.get("current")==="message"?"active":null}>推荐红包</Tappable>
          <Tappable component="div" name="deal" onTap={this._switchCurrent.bind(this,"deal")} className={reward.get("current")==="message"?null:"active"}>成交佣金</Tappable>
        </header>
        <section>
          <label>合计</label><span>{current.get("total")}</span>
        </section>
        <section>
          <label>流水</label>
        </section>
        {current.get("info")?

        <ul className="flow">
          <div className="border"></div>
          {current.get("info").map(record=>(
            <li key={record.get("id")}>
              <header>{record.get("createtime")}
                <span style={{display:"inline-block",marginLeft:"10px"}}>
                  {reward.get("current")=="message"?
                    record.get("rewardPrice"):
                    record.get("rewardPrice")*(parseFloat(record.get("resourceInfo")?record.get("resourceDealReward"):record.get("unitDealReward")))/100}元</span>
              <span style={{display:reward.get("current")=="message"?"none":"inline"}}>(返佣比例{record.get("resourceInfo")?record.get("resourceDealReward"):record.get("unitDealReward")}%) </span></header>
              <footer>
                <span>{record.get("resourceInfo")}</span>
                <span>{record.get("unitInfo")}</span>
              </footer>
            </li>
          ))}
        </ul>:null

        }

        <footer>
          <span>此外，在您所有的推荐中，还有：</span><br/>
          <span><span style={{color:"#c80000"}}>{reward.getIn(["message","wait"])}</span> 条待获得“推荐红包”</span><br/>
          <span><span style={{color:"#c80000"}}>{reward.getIn(["deal","wait"])}</span> 条待获得“成交佣金”</span><br/>
        {/*  <div style={{marginTop:"0.5rem",color:"blue"}}>点我查看</div>
          */}
        </footer>

      </div>
    )
  }
  _switchCurrent(name){
    this.props.dispatch(setCurrentReward(name))
  }




}
