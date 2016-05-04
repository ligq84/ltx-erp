import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"
import DefaultInput from "../../../components/DefaultInput"



@pureRender
export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
      validateCode:""
    }
  }
  render() {
    const {show,tel,second,isValidateFetching,isBind} = this.props

    return (
      <div className="bind-modal" style={{display:show||isValidateFetching?"block":"none"}}>
        <main>
          <h2>{isBind?"绑定电话":"解除绑定"}</h2>
          <div style={{marginBottom:10/64+"rem"}}>已向<span>{tel}</span>的手机号发送6位验证码，继续{isBind?"绑定电话":"解除绑定"}请输入该验证码并提交。</div>
          <label>手机号</label>{tel}<span></span><br/>
          <label>验证码</label><input type="tel"  value={this.state.validateCode} onChange={this._handleCodeChange.bind(this)}></input>
          <Tappable  className="get" style={{backgroundColor:second==60?"#ef4f4f":"#b3b3b3"}} onTap={this._handleReGet.bind(this)}>重新获取</Tappable>
          {
            second==60?null:<span><span style={{color:"red"}}>{second}</span>秒后可重新获取</span>
          }


          <footer>
            <Tappable component="div" className="cancel" onTap={this._handleCancle.bind(this)}>取消</Tappable>
            <Tappable component="div" className="save" style={{backgroundColor:this.state.validateCode.length===6?"#ef4f4f":"#b3b3b3"}} onTap={this._handleSave.bind(this)}>
              {isValidateFetching?"正在验证...":"确认"}</Tappable>
          </footer>
        </main>
      </div>
    )
  }
  _handleCancle(){
    this.props.onCancel()

  }
  _handleSave(){
    if(this.state.validateCode.length===6){
      this.props.onSave(this.state.validateCode)
    }
  }

  _handleReGet(){
    if(this.props.second===60){
      this.props.onReGet()
    }
  }
  _handleCodeChange(event){
    this.setState({
      validateCode:event.target.value
    })


  }


}
