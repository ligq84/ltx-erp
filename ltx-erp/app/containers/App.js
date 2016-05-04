import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getToken } from '../actions'
import reqwest from "reqwest"
import Loading from "../components/Loading"

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

@connect((state)=>({
  recommender:state.get("personal")
}))
export default class  extends Component {

  componentDidMount(){
    // alert(this.props.location.query.code)
    const that = this;
    var i =0


    function getOpenId(code){

      reqwest({
        url:"/renren/recommendsResourcePeople/getOpenIdByCode/"+code
      }).then(data=>{
        // alert(data.data)
        if(data.data==undefined){
          if(i<3){
              getOpenId(code)
              i++
          }

        }else {

          that.props.dispatch(getToken(data.data))
        }
      })
    }
    getOpenId(that.props.location.query.code)
  //  that.props.dispatch(getToken(111))
  }



  render() {
    return (
      <div>{this.props.recommender.get("tokenId")==""?<Loading></Loading>:this.props.children}</div>
    )
  }
}





// App.propTypes = {
//   selectedReddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }
