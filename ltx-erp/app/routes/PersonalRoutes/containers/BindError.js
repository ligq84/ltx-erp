import "./PersonalDetail.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import rightArrow from "../../../img/arrow-right.png"
import {fetchPersonalIfNeed} from "../actions"
import Tappable from "react-tappable"




export default class  extends Component {
  constructor(props){
    super(props)
    document.title = '绑定失败';

}




  render() {

    const {personal} = this.props


    return (
      <div className="need-to-know">




    <p>绑定失败  </p>
  </div>
    )
  }





}
