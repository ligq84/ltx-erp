import React, { Component, PropTypes } from 'react'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"

const defaultOption = []

@pureRender
export default class DefaultSelect  extends Component {
  render() {
    const {onChange,label,name,className,placeholder,value} = this.props
    const options = this.props.options||defaultOption
    return (
      <section className= {"default-select "+className}>
        <span>{label}</span>
        <select disabled={options===defaultOption||options.size==0}  name={name} value={value} onChange={onChange}>
          <option >{placeholder?placeholder:"请选择"}</option>
          {options.map((option)=>(

            <option key={option.get("id")} value={option.get("id")}> {option.get("name")}</option>
          ))}
        </select>
      </section>
    )
  }
}
// DefaultSelect.PropTypes={
//   options:React.PropTypes.instanceOf(Immutable.List).isRequired
// }
