import './Property.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"

import {fetchProperty} from "../actions"
import Tappable from "react-tappable"
import Loading from '../../../components/Loading'

@pureRender
@connect((state)=>({
  property:state.get("property").get("detail"),
  isFetching:state.get("property").get("isPropertyFetching")

}))
export default class  extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){

    const {dispatch,location} = this.props
    dispatch(fetchProperty(location.query.id))
    document.title = '源详情';


  }

  render() {
    const {isFetching} = this.props

    return (
      <div className="property-detail">
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
    const {property} = this.props

    return (
      <main>
      <section className="item">
        <h2>基本信息</h2>
        <div>
          <label>楼盘名称</label><span>{property.get("buildname")}</span>
        </div>
        <div>
          <label>单元号</label><span>{property.get("blockname")}</span>
        </div>
        <div>
          <label>面积</label><span>{property.get("area")}<span>m<sup>2</sup></span></span>
        </div>
        <div>
          <label>价格</label><span>{property.get("price")}</span>
        </div>
        <div>
          <label>状态</label><span>{property.get("statusName")}</span>
        </div>
        <div>
          <label>备注</label><span>{property.get("rpremark")}</span>
        </div>
      </section>
      <section className="item">
        <h2>房源动态</h2>
        {/*

          <div>
            <label>房源状态</label><span>{property.get("propertyStatus")}</span>
          </div>
          <div>
            <label>访问次数</label><span>{property.get("propertyVisitCount")}</span>
          </div>
          <div>
            <label>带看次数</label><span>{property.get("propertyLookCount")}</span>
          </div>


          */}

        <ul>
          <div className="border"/>
          {property.get("logInfo").map((log)=>(
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
          <label>推荐日期</label><span>{property.get("createtime")}</span>
        </div>
        <div>
          <label>审核状态</label><span>{property.get("checkstatus")=="0"?"未审核":property.get("checkstatus")==="1"?"审核通过":"审核未通过"}</span>
        </div>
        {property.get("checkstatus")=="0"?null:(
        <section>
        {property.get("infoReward")?
          <div>
            <label>奖励情况</label><span>{property.get("infoReward")}</span>
          </div>:null}
        {property.get("turnoverReward")?
          <div>
            <label></label><span>{property.get("turnoverReward")}</span>
          </div>:null
        }

          <div>
            <label>审核备注</label><span>{property.get("checkremark")}</span>
          </div>

          </section>)}

      </section>
      </main>




    )

  }


}
