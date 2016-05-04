import "./RewardDetail.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import rightArrow from "../../../img/arrow-right.png"
import Tappable from "react-tappable"
import {fetchPersonalIfNeed,fullReward,isShowPullRewardResult} from "../actions"
import {successImg} from "../../../img/succeed-pic.png"

@connect((state)=>({
  personal:state.get("personal"),
  isPullRewarding:state.getIn(["personal","reward","isPullRewarding"]),
  isShowPullRewardResult:state.getIn(["personal","reward","isShowPullRewardResult"])
}))
export default class  extends Component {
  constructor(props){
    super(props)
    this.state = {
      isDirty:false,
      isShowNumError  :false,
      isShowRequiredError:false,
      isShowCountError:false,
      isMoreThan0:false,
      value:"",
      confirmShow:false

    }

  }

  componentDidMount(){
    const {dispatch} =this.props

        dispatch(fetchPersonalIfNeed())

  }


  render() {

    const {personal,isPullRewarding,isShowPullRewardResult} = this.props
    const dd = new Date()


    return (
      <div className={this.state.confirmShow?"apply-pull fixed":"apply-pull"} ref="applyPull" >
        <div><label>姓名</label><span>{personal.get("name")}</span></div>
        <div><label>手机</label><span>{personal.get("tel")}</span></div>
        <div><label>银行卡</label><span>{personal.get("bankcard")}</span></div>
        <div><label>申请日期</label><span>{dd.Format('yyyy-MM-dd')}</span></div>
        <div><label>打款日期</label><span>每月10日</span></div>
        <div><label>奖励总额</label><span>{personal.get("surplusPrice")}</span></div>
        <div><label>提取额度</label><input placeholder="请输入提取金额" value={this.state.value} type="tel" onChange={this._validate.bind(this)}></input>元</div>
        <div className="error">{this.state.isShowRequiredError?"请输入金额":null}
              {this.state.isShowNumError?"请输入正确的金额":null}
              {this.state.isShowCountError?"提取金额不可大于奖励总额":null}
              {this.state.isMoreThan0?"请输入大于0的金额":null}
        </div>
        <span className="notice">
        温馨提示：  </span><br/>
        <span className="notice">1、佣金提取需缴纳12.5%税费； </span><br/>
        <span className="notice">2、截至每月28日（含），合伙人在此之前申请提现，可在次月10日获得返还佣金；若未申请提现，则次月不进行佣金返还。
        （若于每月28日后申请提现，该申请将被划归至次月进行处理，即申请人在此后的第三个月10日可获得返还佣金） </span><br/>
        <span className="notice">3、提现申请通过审核后，所获奖励总额将随即减少。 </span><br/>

        <footer>
          <Tappable component="div" className="cancel" onTap={this._back2Index.bind(this)}>返回首页</Tappable>
          <Tappable component="div" style={{backgroundColor:isPullRewarding?"#d63636":"#ef4f4f"}} className="save" onTap={this._commit.bind(this)}>{isPullRewarding?"提交中...":"提交"}</Tappable>
        </footer>

        <div className="bind-modal" style={{display:this.state.confirmShow?"block":"none"}}>
             <main>
                <img src={successImg}/>
                <h2>是否确认提交？</h2>
                <footer>
                  <Tappable className="cancel" onTap={this._cancle.bind(this)}>取消</Tappable>
                  <Tappable className="save" onTap={this._confirm.bind(this)}>确定</Tappable>
                </footer>
            </main>
        </div>



        <div className="bind-modal" style={{display:isShowPullRewardResult?"block":"none"}}>
             <main>
                <img src={successImg}/>
                <h2>提取成功</h2>
                <footer>
                  <Tappable className="cancel" onTap={this._goBackIndex.bind(this)}>返回首页
                  </Tappable>
                  <Tappable className="save" onTap={this._go2History.bind(this)}>查看提取记录</Tappable>
                </footer>
            </main>
        </div>
      </div>
    )
  }
  _validate(event){
    const {value} = event.target;
    var exp = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
    this.setState({
      isDirty:true,
      value:value
    })
    if(this.state.isMoreThan0){
      this.setState({
        isMoreThan0:false
      })
    }


    if(value.replace(/(^s*)|(s*$)/g, "").length ==0){
      this.setState({
        isShowRequiredError:true
      })
    }else {
      this.setState({
        isShowRequiredError:false
      })
      if(exp.test(value)){
        this.setState({
          isShowNumError:false
        })
        if(parseFloat(value)==0){
          this.setState({
            isMoreThan0:true
          })
        }else {
          this.setState({
            isMoreThan0:false
          })
        }

        if(parseFloat(value)>parseFloat(this.props.personal.get("surplusPrice"))){
          this.setState({
            isShowCountError:true
          })


        }else {
          this.setState({
            isShowCountError:false,
            value:value
          })
        }
      }else {
        this.setState({
          isShowNumError:true
        })
      }
    }

  }

  _back2Index(){

    this.props.history.pushState(null, '/personalDetail')
  }
  _goBackIndex(){
    this.setState({
      value:''
    })
      this.props.history.pushState(null, '/personalDetail')
    this.props.dispatch(isShowPullRewardResult(false))
  }
  _go2History(){
    this.props.dispatch(isShowPullRewardResult(false))
    this.props.history.pushState(null, '/pullReward/PullHistory')
  }

  _commit(){
    const {isDirty,isShowNumError,isShowRequiredError,isShowCountError,value,isMoreThan0} = this.state
    const {isPullRewarding} = this.props
    if(!isPullRewarding){
      if(isDirty&!isShowNumError&!isShowRequiredError&!isShowCountError&&!isMoreThan0){
        this.setState({
          confirmShow:true
        })

      }else{
        this._validate({target:{value:""}})
      }
    }
  }
  _confirm(){
    this.setState({
      confirmShow:false
    })


    this.props.dispatch(fullReward(this.state.value))

  }
  _cancle(){

    this.setState({
      confirmShow:false
    })


  }

}
