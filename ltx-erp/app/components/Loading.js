import './Loading.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"
import loadingGif from '../img/loading.gif'

export default class  extends Component {
  render() {


    return (
      <section className="loading">
        <header><img src={loadingGif}></img></header>
        <div>数据加载中</div>
      </section>

    )
  }


}
