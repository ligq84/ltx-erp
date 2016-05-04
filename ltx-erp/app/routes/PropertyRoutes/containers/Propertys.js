import './Propertys.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPropertys } from '../actions'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"
import Property from "../components/Property"

@pureRender
@connect((state)=>({
  propertys:state.get("property").get("datas")

}))
export default class  extends Component {
  constructor(props){
    super(props)
    this._toNeedToKnow=this._toNeedToKnow.bind(this)
    this._handleAddProperty= this._handleAddProperty.bind(this)
    this._handlePropertyTap = this._handlePropertyTap.bind(this)
  }

  componentDidMount(){

    const {dispatch} = this.props
    dispatch(fetchPropertys())
    document.title = '房源推荐列表';
  }

  render() {

    return (
      <div className="propertys">
      <Tappable component="header" onTap={this._toNeedToKnow}>
        返佣说明
      </Tappable>
        {this.props.propertys.size>0?this.renderList():this.renderNoProperty()}


        <Tappable component="footer" onTap={this._handleAddProperty}>
          新增推荐
        </Tappable>

      </div>
    )
  }

  renderNoProperty(){
    return (
      <main className="reward">
      <h3>推荐红包</h3>
      <p>红包金额：XX元/条</p>
      <p>发放流程：</p>
      <p>信息核实 — 结果反馈 — 用户申请提现 — 每月10日统一发放</p>
      <p>发放方式：银行卡转账</p>
      <h3></h3>
      <p>佣金金额：xx%实得佣金</p>
      <p>例如：实得佣金为30000元，返佣比例为10%，成交后合伙人便可获得3000元成交佣金</p>
      <p>发放流程：</p>
      <p>有成交意向的房、客源签订合同 — 客户付款 — 楼天下收到甲方佣金 — 用户申请提现 — 每月10日统一发放</p>
      <p>发放方式：银行卡转账</p>
      </main>
    )
  }
  renderList(){


    return (
      <main className="list">
        {
          this.props.propertys.map((property,index)=>(
            <Property onTap={this._handlePropertyTap}    key={index} property={property}/>
          ))
        }
      </main>
    )
  }

  _toNeedToKnow(){
    this.props.history.pushState(null, '/needToKnow')
  }
  _handleAddProperty(){
    this.props.history.pushState(null, '/addProperty')
  }

  _handlePropertyTap(property){

      this.props.history.pushState(null, '/property?id='+property.get("id"))

  }


}
