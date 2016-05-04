import React, { Component, PropTypes } from 'react'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import deleteImg from "../img/delete.png"
import Tappable from "react-tappable"

@pureRender
export default class DefaultInput  extends Component {
  constructor(){
    super()


  }
  componentWillReceiveProps(nextProps){
    // this.setState({
    //   value:nextProps.value,
    //   isError:nextProps.isError||false
    // })
  }


  render() {

    const {type,isError,value,options,label,onBlur,onChange,className,children,disabled,placeholder,name,onFocus,errorMessage} = this.props
    console.log(isError === undefined);

    return (
      <section  className={"default-input "+className}>
        <span>{label}</span>
        <input

          type={type||"text"}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}>
        </input>
        {children}
        <Tappable onTap={this._handleDelete.bind(this)} component="img" style={{display:value?"block":"none"}} src={deleteImg}/>
        <div style={{display:isError?"block":"none"}}>{errorMessage||"此项为必填"}</div>

      </section>
    )
  }

  _handleDelete(){

    this.props.onChange({target:{value:"",name:this.props.name}})
  }




}
