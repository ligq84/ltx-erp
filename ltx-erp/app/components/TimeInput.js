import React, { Component, PropTypes } from 'react'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"

@pureRender
export default class TimeInput  extends Component {
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

    const {isError,value,label,onBlur,onChange,className,name,onFocus,errorMessage} = this.props


    return (
      <section  className={"default-input "+className}>
        <span>{label}</span>
        <input
    
          type="date"
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}


          value={value}
          onChange={onChange}>
        </input>

        <div style={{display:isError?"block":"none"}}>{errorMessage||"此项为必填"}</div>

      </section>
    )
  }






}
