import "./PersonalDetail.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import rightArrow from "../../../img/arrow-right.png"
import {fetchPersonalIfNeed} from "../actions"
import Tappable from "react-tappable"
import {successImg} from "../../../img/succeed-pic.png"
import { Link } from 'react-router'
import Loading from '../../../components/Loading'


@pureRender
@connect((state)=>({
  personal:state.get("personal")
}))
export default class  extends Component {
  constructor(props){
    super(props)
    this._handleChange = this._handleChange.bind(this)
  }


  componentDidMount(){

    this.props.dispatch(fetchPersonalIfNeed())

    document.title = '合伙人中心';
  }
  render() {
    const {personal} = this.props

    return  personal.get("isFetchingPersonal")?this.renderIfFetching():this.renderIfComplete()
  }
  renderIfFetching() {
    return (
      <Loading></Loading>
    )
  }

  renderIfComplete() {

    const {personal} = this.props


    return (
      <div className="personal-detail">
        {personal.get("name").length>0||personal.get("bankcard").length||(""+personal.get("tel")).length>0?
          <Tappable component="header" onTap={this._handleChange}>
            <section>
              <label>合伙人</label><span>{personal.get("name")}</span>
              <span style={{marginLeft:20/64+"rem"}}>
                  {personal.get("sex")===""?null:personal.get("sex")==1?"先生":"女士"}
              </span>
            </section>
            <section><label>手机</label><span>{personal.get("tel")}</span><div>修改</div></section>
            <section><label>银行卡</label><span>{personal.get("bankcard")}</span></section>
          </Tappable>:<header>
            <main>
                暂无个人信息，您可以
              <Link  to="personalUpdate" component="div" className="primary">完善个人信息</Link>
              <Link  to="addProperty" component="div" >推荐房源</Link>
              <Link  to="addCustomer" component="div" >推荐客源</Link>
            </main>
          </header>}
        <footer>
          <Tappable  component="section"  onTap={this._toAward.bind(this)}>财富中心 <img src={rightArrow}></img></Tappable>
          <Tappable  component="section"  onTap={this._toPullAward.bind(this)}>我要提现<img src={rightArrow}></img></Tappable>
          <Tappable  component="section"  onTap={this._toHelp.bind(this)}>帮助与反馈 <img src={rightArrow}></img></Tappable>
        </footer>
        <main>
          <section style={{fontSize:36/64+"rem"}}>奖励及佣金</section>
          <section >推荐红包<div><span className="red">{personal.get("resourceinforeward")}</span>元/次</div></section>
          <section >房源返佣比例<div><span className="red">{personal.get("unitdealreward")}</span>%</div></section>
          <section >客源返佣比例<div><span className="red">{personal.get("resourcedealreward")}</span>%</div></section>
        </main>
      </div>
    )
  }

  renderNoProperty(){
    return (
      <main className="reward">
        <h3>［信息奖励］</h3>
      </main>
    )
  }
  renderList(){
    return (
      <main className="list">
        <section>
        </section>
      </main>
    )


  }
  _handleChange(){

    this.props.history.pushState(null, '/personalUpdate')
    //

  }

  _toAward() {

    this.props.history.pushState(null, '/rewardDetail')
  }
  _toPullAward(){

    this.props.history.pushState(null, '/pullReward/ApplyPull')

  }
  _toHelp(){

  }



}
