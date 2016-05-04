import './Customers.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Customer from '../components/Customer'
import {fetchCustomers} from "../actions"
import Tappable from "react-tappable"
@pureRender
@connect((state)=>({
  customers:state.get("customer").get("datas")

}))
export default class  extends Component {
  constructor(props){
    super(props)
    this._toNeedToKnow=this._toNeedToKnow.bind(this)
    this._handleCustomerTap=this._handleCustomerTap.bind(this)
    this._handleAddCustomer=this._handleAddCustomer.bind(this)
  }
  componentDidMount(){

    const {dispatch} = this.props
    dispatch(fetchCustomers(1))
    document.title = '客源推荐列表';


  }

  render() {
    return (
      <div className="customers">
        <Tappable component="header" onTap={this._toNeedToKnow}>
          返佣说明
        </Tappable>
        {this.props.customers.size>0?this.renderList():this.renderNoProperty()}



        <Tappable component="footer" onTap={this._handleAddCustomer}>
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
        <h3>成交佣金</h3>
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

      {this.props.customers.map((customer,index)=>(
        <Customer onTap={this._handleCustomerTap} key={index} customer={customer}></Customer>))}
      </main>
    )
  }
  _toNeedToKnow(){
    this.props.history.pushState(null, '/needToKnow')
  }
  _handleCustomerTap(customer){
    this.props.history.pushState(null, '/customer?id='+customer.get("id"))
  }
  _handleAddCustomer(){
    this.props.history.pushState(null, '/addCustomer')

  }
}
