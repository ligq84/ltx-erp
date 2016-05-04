import './Customer.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Customer from '../components/Customer'
import {fetchCustomer} from "../actions"
import Tappable from "react-tappable"
import Loading from '../../../components/Loading'

@pureRender
@connect((state)=>({
  customer:state.get("customer").get("detail"),
  isFetching:state.get("customer").get("isCustomerFetching")

}))
export default class  extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    const {dispatch,location} = this.props
    dispatch(fetchCustomer(location.query.id))
    document.title = '客源详情';

  }

  render() {
    const {isFetching} = this.props

    return (
      <div className="customer-detail">
        {isFetching?this.renderIfFetching():this.renderIfComplete()}
      </div>
    )
  }
  renderIfFetching() {
    return (
      <Loading></Loading>
    )
  }
  renderIfComplete(){
    const {customer} = this.props

    return (
      <main>

      <section className="item">
        <h2>需求信息</h2>
        <div>
          <label>企业名称</label><span>{customer.get("company")}</span>
        </div>
        <div>
          <label>联系人</label><span>{customer.get("contact")}</span>
        </div>
        <div>
          <label>手机</label><span>{customer.get("tel")}</span>
        </div>
        <div>
          <label>需求日期</label><span>{customer.get("demandtime")&&new Date(parseInt(customer.get("demandtime"))).Format("yyyy-MM-dd")}</span>
        </div>
        <div>
          <label>面积</label><span>{customer.get("area")}<span>m<sup>2</sup></span></span>
        </div>
        <div>
          <label>价格</label><span>{customer.get("price")}{customer.get("priceunit")==1?
            <span>元/<span>m<sup>2</sup>.天</span></span>:customer.get("priceunit")==2?
            <span>元/<span>m<sup>2</sup>.月</span></span>:<span>元/月</span>
          }</span>
        </div>
        <div>
          <label>推荐备注</label><span>{customer.get("rpremark")}</span>
        </div>
      </section>
      <section className="item">
        <h2>客源动态</h2>
        {/*
          <div>
            <label>客源状态</label><span>{customer.get("customerStatus")}</span>
          </div>
          <div>
            <label>访问次数</label><span>{customer.get("customerVisitCount")}</span>
          </div>
          <div>
            <label>带看次数</label><span>{customer.get("customerLookCount")}</span>
          </div>


          */}

        <ul>
          <div className="border"/>
          {customer.get("logInfo").map((log)=>(
          <li key={log.get("id")}>
            <header>{new Date(parseInt(log.get("operatortime"))).Format("yyyy-MM-dd")}</header>
            <footer>{log.get("operatorcontent")}</footer>
          </li>
          ))}

        </ul>
      </section>
      <section className="item">
        <h2>审核及奖励</h2>
        <div>
          <label>推荐日期</label><span>{customer.get("createtime")}</span>
        </div>
        <div>
          <label>审核状态</label><span>{customer.get("checkstatus")=="0"?"未审核":customer.get("checkstatus")==="1"?"审核通过":"审核未通过"}</span>
        </div>
        {customer.get("checkstatus")=="0"?null:(
        <section>
        {customer.get("infoReward")?
          <div>
            <label>奖励情况</label><span>{customer.get("infoReward")}</span>
          </div>:null}
        {customer.get("turnoverReward")?
          <div>
            <label></label><span>{customer.get("turnoverReward")}</span>
          </div>:null
        }

          <div>
            <label>审核备注</label><span>{customer.get("checkremark")}</span>
          </div>

          </section>)}

      </section>
      </main>




    )

  }


}
