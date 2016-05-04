import React,{Component} from 'react'
import pureRender from "pure-render-decorator"
import { connect } from 'react-redux'
import {fetchDepartments} from '../actions'


@pureRender
@connect((state)=>{
  return {
    departments:state.get("departments")
  }
})
export default class  extends Component {

  componentDidMount(){

    const {dispatch} = this.props


    dispatch(fetchDepartments())


  }

  render() {
    const {departments} = this.props
    return (
      <select value={false}  disabled={departments.get("isFetching")}>
        <option  value={false}  disabled="disabled">{departments.get("isFetching")?"加载中...":"请选择"}</option>
        <option value={null}>不限</option>
        {departments.get("items").map(item=>(
          <option key={item.get("id")} value={item.get("id")}>{item.get("name")}</option>
        ))}

      </select>)
  }
}
