import "./PersonalUpdate.less"
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Tappable from "react-tappable"
import DefaultInput from "../../../components/DefaultInput"
import {fetchPersonalIfNeed,
        sendValidateCode,
        validateCode,
        fetchPersonal,
        updatePersonal,
        isNeedToValidate,refreshPersonal} from "../actions"
import ReleaseBind from "../components/ReleaseBind"
import ReleaseResult from "../components/ReleaseResult"
import successImg from "../../../img/succeed-pic.png"
import Loading from '../../../components/Loading'


@pureRender
@connect((state)=>({
  personal:state.get("personal")
}))
export default class  extends Component {
  constructor(props){
    super(props)

    this.state={

      releaseBindShow:false,
      second:60,
      isShowValidateResult:false,
      name:{
        require:true,
        value:"",
        isError:false
      },
      tel:{
        require:true,
        value:"",
        isError:false
      },
      bankcard:{
        require:true,
        value:"",
        isError:false
      }
    }
    this._reduce=this._reduce.bind(this)
    this._handleReleaseBindCancel=this._handleReleaseBindCancel.bind(this)
    this._handleReleaseBindSave=this._handleReleaseBindSave.bind(this)
    this._handleReleaseBind=this._handleReleaseBind.bind(this)
    this._handleReGet=this._handleReGet.bind(this)
    this._releaseResultBack=this._releaseResultBack.bind(this)
    this._releaseResultRetry=this._releaseResultRetry.bind(this)
    this._handleSave=this._handleSave.bind(this)
    this._handleCancel=this._handleCancel.bind(this)
  }

  componentDidMount(){
    this.props.dispatch(fetchPersonalIfNeed())

    //如果是 修改的话
    if(this.props.personal.get("isPerfectInfo")){
      this._props2State(this.props)
    }else {


    }
    document.title = '合伙人信息';
    this.setState({
      name:{
        require:true,
        value:this.props.personal.get("name"),
        isError:false
      },
      tel:{
        require:true,
        value:this.props.personal.get("tel"),
        isError:false
      },
      bankcard:{
        require:true,
        value:this.props.personal.get("bankcard"),
        isError:false
      }
    })

  }

  componentWillReceiveProps(nextProps){

    this._props2State(nextProps)

  }
  render() {
    const {personal} = this.props

    return  personal.get("isFetchingPersonal")?this.renderIfFetching():this.renderIfComplete()
  }
  renderIfFetching() {
    return (
      <Loading></Loading>
    )
  }


  renderIfComplete() {
    const {releaseBindShow,second,isShowValidateResult,name,tel,bankcard} = this.state
    const {personal} = this.props
    const validate = personal.get("validate")


    return (
      <div className="personal-update">
        <section style={{display:this.props.location.query.from?"block":"none",textAlign:"center",overflow:"hidden"}}>
          <img style={{
            margin:"auto",
            display:"block",
            width:"150px",
            height:"150px"
          }} src={successImg}/>
          <span style={{display:"inline-block",color:"#ef4f4f",fontSize:"18px",padding:"20px"}}>您的推荐信息已提交。请完善个人信息，便于日后发放奖励。</span>
        </section>


        <DefaultInput
          onChange={this._handleChange.bind(this)}
          value={name.value}
          onBlur={this._handleBlur.bind(this)}
          isError={name.isError}
          name="name"
          label="姓名">
        </DefaultInput>
        <DefaultInput
          disabled={!validate.get("isNeedToValidate")}
          value={tel.value}
          isError={tel.isError}
          onChange={this._handleChange.bind(this)}
          onBlur={this._handleBlur.bind(this)}
          name="tel"
          label="手机号">
          {validate.get("isNeedToValidate")?null:
            <Tappable component="div" className="tel-bind" onTap={this._handleReleaseBind}>解绑</Tappable>
          }
        </DefaultInput>
        <DefaultInput
         value={bankcard.value}
         onChange={this._handleChange.bind(this)}
         onBlur={this._handleBlur.bind(this)}
         name="bankcard"
         label="银行卡"></DefaultInput>
        <section style={{textAlign:"center",marginBottom:"10px",marginTop:"-20px"}}><span  style={{lineHeight:"30px",display:"inline",width:"100%",fontSize:"18px",color:"#ccc"}}>若非本人持卡，请注明姓名，如6654 XXXX XXXX XXXX，李明</span></section>
        <section className="default-input"><span>专属服务人</span>{personal.get("empName")}</section>


        <footer>
          <Tappable className="cancel" onTap={this._handleCancel}>取消</Tappable>
          <Tappable className="save" onTap={this._handleSave}>完成</Tappable>
        </footer>



        <ReleaseBind
          show={releaseBindShow}
          tel={tel.value}
          isValidateFetching={personal.getIn(["validate","isFetching"])}
          second={second}
          onCancel={this._handleReleaseBindCancel}
          onReGet={this._handleReGet}
          isBind = {validate.get("isNeedToValidate")}
          onSave={this._handleReleaseBindSave}>
        </ReleaseBind>
        <ReleaseResult
          show={isShowValidateResult&&!personal.get("isFetchingPersonal")}
          isBind = {!validate.get("isNeedToValidate")}
          isValidateFetching={personal.getIn(["validate","isFetching"])}
          isValidateSuccess ={personal.getIn(["validate","isSuccess"])}
          onBack ={this._releaseResultBack}
          onRetry={this._releaseResultRetry}
          >
        </ReleaseResult>
      </div>
    )
  }

  _handleSave(){

    ["name","tel"].forEach((ele)=>{
      this._handleBlur({target:{
        name:ele,
        value:this.state[ele].value
      }})

    })



    setTimeout(()=>{
      const {name,tel,bankcard} = this.state

      if(!name.isError&&!tel.isError){


        //如果是新增(或者解绑之后)的话
        if(this.props.personal.getIn(["validate","isNeedToValidate"])){

          this._handleReleaseBind()
        }else {

          //如果只是普通的修改
          this.props.dispatch(refreshPersonal({
            name:this.state.name.value,
            bankcard:this.state.bankcard.value,
          }))
          this.props.dispatch(updatePersonal())

        }


      }


    })



  }
  _handleCancel(){
    this._props2State(this.props)
    this.props.history.goBack()



  }

  _handleBlur(event){
    if(event.target.value==""){
      this.setState({
        [event.target.name]:{
          ...this.state[event.target.name],
          value:"",
          isError:true
        }
      })
    }else {
      this.setState({
        [event.target.name]:{
          ...this.state[event.target.name],
          isError:false
        }
      })

    }

  }
  _handleChange(event){


    if(event.target.value==""&&this.state[event.target.name].require){
      this.setState({
        [event.target.name]:{
          ...this.state[event.target.name],
          value:"",
          isError:true
        }
      })
    }else{
      this.setState({
        [event.target.name]:{
          ...this.state[event.target.name],
          value:event.target.value
        }
      })
    }

  }

  _handleReleaseBind(){
    this.setState({
      releaseBindShow:true
    })

    if(!this._reduceFlag){

      this.props.dispatch(sendValidateCode(this.state.tel.value))
      this._reduce();
      this._reduceFlag=true
    }
  }
  _handleReleaseBindCancel(){
    this.setState({
      releaseBindShow:false
    })

  }
  _handleReGet(){
    if(!this._reduceFlag){
      this._reduce();
      this._reduceFlag=true
    }
  }
  _handleReleaseBindSave(code){
    this.setState({
      releaseBindShow:false,
      isShowValidateResult:true,
    })
    //新增的话
    if(this.props.personal.getIn(["validate","isNeedToValidate"])){

      this.props.dispatch(refreshPersonal({
        name:this.state.name.value,
        tel :this.state.tel.value,
        bankcard:this.state.bankcard.value,
      }))
      //此处水很深。。验证成功后 update  update后 fetch
      this.props.dispatch(validateCode(this.state.tel.value,code))


    }else{
      this.props.dispatch(refreshPersonal({
        name:this.state.name.value,
        tel :"",
        bankcard:this.state.bankcard.value,
      }))
      //此处水很深。。验证成功后 update  update后 fetch
      this.props.dispatch(validateCode(this.state.tel.value,code))
    }





  }

  _releaseResultBack(){
    this.setState({
      releaseBindShow:false,
      isShowValidateResult:false,
    })
    this._resetTime()
    //如果不成功的话

    if(!this.props.personal.getIn(["validate","isSuccess"])){
      this.props.dispatch(fetchPersonal())

    }
    if(!this.props.personal.getIn(["validate","isNeedToValidate"])){
      //from propert
      // if(this.props.location.query.from=="property"){
      //   this.props.history.pushState(null, '/propertys')
      // }else if(this.props.location.query.from=="customer"){
      //   this.props.history.pushState(null, '/customers')
      // }else {
      //   this.props.history.pushState(null, '/personalDetail')
      // }
      this.props.history.pushState(null, '/personalDetail')
    }else{

    }






    //this.props.dispatch(isNeedToValidate(true))
  }
  _releaseResultRetry(){
    this.setState({
      releaseBindShow:true,
      isShowValidateResult:false,
    })

  }
  _reduce(){
    if(this.state.second>0){
      this.setState({
        second:this.state.second-1
      })
      setTimeout(this._reduce,1000)
    }else {
      this.setState({
        second:60
      })
      this._reduceFlag=false;
    }
  }
  _resetTime(){
    this.setState({
      second:0
    })
  }
  _props2State(nextProps){
    this.setState({
      name:{
        value:nextProps.personal.get("name")
      },
      tel:{
        value:nextProps.personal.get("tel")
      },
      bankcard:{
        value:nextProps.personal.get("bankcard")
      }
    })


  }
  componentWillUnmount(){
    this._resetTime()
  }
}
