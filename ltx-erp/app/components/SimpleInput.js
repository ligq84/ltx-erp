import React, { Component, PropTypes } from 'react'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import deleteImg from "../img/delete.png"
import Tappable from "react-tappable"

@pureRender
export default class SimpleInput  extends Component {
  constructor(){
    super()
    this.state={

    }

  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value:nextProps.value,

    })
  }


  render() {
    const {options,label,onBlur,className,children,disabled,placeholder,name,require} = this.props
    const {value} = this.state

    return (
      <section className="default-input {className}">
        <span>{label}</span>
        <input onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)} name={name} placeholder={placeholder} disabled={disabled} value={value} onChange={this._handleChange.bind(this)}></input>
        {children}
        <Tappable onTap={this._handleDelete.bind(this)} component="img" style={{display:value?"block":"none"}} src={deleteImg}/>
      </section>
    )
  }
  _handleChange(event){
    this.setState({
      value:event.target.value
    })
  }
  _handleDelete(){
    this.setState({
      value:undefined
    })
    //this.props.onBlur({target:{value:undefined,name:this.props.name}})
  }

  _handleBlur(event){

    const {onBlur,require} = this.props
    //onBlur(event)

  }
  _handleFocus(){

  }

}
