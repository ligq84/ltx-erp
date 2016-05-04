import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"
import DefaultInput from "../../../components/DefaultInput"
import successImg from "../../../img/succeed-pic.png"


@pureRender
export default class  extends Component {
  constructor(props){
    super(props)
  }


  render() {
    const {show,isValidateFetching,isValidateSuccess,onBack,onRetry,isBind} = this.props
    return (
      <div className="bind-modal" style={{display:show&&!isValidateFetching?"block":"none"}}>
        {isValidateSuccess?
           <main>
              <img src={successImg}/>
              <h2>{isBind?"验证成功":"解绑成功"}</h2>
              <span style={{lineHeight:40/64+"rem",display:isBind?"none":"block"}}>请输入新的11位手机号，并继续完成新手机号的验证，否则解绑无效</span>
              <footer>
                <Tappable className="save" onTap={onBack}>知道了</Tappable>
              </footer>
          </main>:
          <main>
          <h2>{isBind?"解绑失败":"验证失败"}</h2>
          <footer>
            <Tappable className="cancel" onTap={onBack}>返回</Tappable>
            <Tappable className="save" onTap={onRetry}>重试</Tappable>
          </footer>
          </main>}
      </div>
    )
  }
}
