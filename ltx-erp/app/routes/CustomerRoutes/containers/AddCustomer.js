import './AddCustomer.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import Customer from '../components/Customer'
import {fetchCitysIfNeed,fetchDistrictsIfNeed,fetchDistrictsAndComms,setCurrentDsitrict} from '../../../actions'
import {fetchPersonalIfNeed} from '../../PersonalRoutes/actions'
import DefaultSelect from "../../../components/DefaultSelect"
import DefaultInput from "../../../components/DefaultInput"
import Recommender  from "../components/Recommender"
import {refreshCustomer,addCustomer,isShowAddResult} from "../actions"
import Tappable from "react-tappable"
import successImg from "../../../img/succeed-pic.png"
import TimeInput from "../../../components/TimeInput"
import { Link } from 'react-router'
import Loading from '../../../components/Loading'
import RadioGroup from 'react-radio'
import reqwest from "reqwest"
const type1= Immutable.fromJS([{
  id:1,
  name:"元/平·天"
},
{
  id:2,
  name:"元/平·月"
},
{
  id:3,
  name:"元/月"
}])
const type2 = Immutable.fromJS([{
  id:4,
  name:"元/平"
}]);

const type3 = Immutable.fromJS([{
  id:1,
  name:"元/平·天"
},
{
  id:2,
  name:"元/平·月"
},
{
  id:3,
  name:"元/月"
},{
  id:4,
  name:"元/平"
}]);

function switchPriceUnit(type){
  if(type ==0){
    return type1
  }else if(type ==1){
    return type2
  }else if(type ==2){
    return type3
  }
}
const radios =[
  {
    value:1,
    label:"是"

  },
  {
    value:0,
    label:"否"
  }
]





@pureRender
@connect((state)=>({
  city:state.get("city"),
  recommender:state.get("personal"),
  customer:state.getIn(["customer","addDetail"]),
  isAdding:state.getIn(["customer","isAdding"]),
  isShowAddResult:state.getIn(["customer","isShowAddResult"]),
}))
export default class  extends Component {
  constructor(props){
    super(props)
    this._handleChange=this._handleChange.bind(this)
    this._handleCityChange=this._handleCityChange.bind(this)
    this._handleDistrictChange=this._handleDistrictChange.bind(this)
    this._handleCommChange=this._handleCommChange.bind(this)
    this._handleNoValidate=this._handleNoValidate.bind(this)

    this._handleBlur  = this._handleBlur.bind(this)
    this._handleFocus = this._handleFocus.bind(this)
    this._handleAddCustomer=this._handleAddCustomer.bind(this)
    this._back2Customers=this._back2Customers.bind(this)
    this._goOnBuilding=this._goOnBuilding.bind(this)
    this._handleTelChange = this._handleTelChange.bind(this)
    this._handleTelBlur = this._handleTelBlur.bind(this)
    this.state = {
      contact:{
        require : true,
        value :"",
        isError :false
      },
      tel:{
        require : true,
        value :"",
        isError :false,
        errorMessage:null
      }
    }
  }
  componentDidMount(){
    const {dispatch} =this.props;
    dispatch(fetchCitysIfNeed())
    dispatch(fetchPersonalIfNeed())
    document.title = '我有客户';
    // this.props.dispatch(fetchDistrictsAndComms(802))


    this.setState({
      contact:{
        require : true,
        value :this.props.customer.get("contact"),
        isError :false
      },
      tel:{
        require : true,
        value :this.props.customer.get("tel"),
        isError :false,
        errorMessage:null
      }
    })

  }
  render() {
    const {recommender} = this.props

    return  recommender.get("isFetchingPersonal")?this.renderIfFetching():this.renderIfComplete()
  }
  renderIfFetching() {
    return (
      <Loading></Loading>
    )
  }

  renderIfComplete() {

    const citys = this.props.city.get("citys")
    const districts = this.props.city.get("districts")
    const comms = this.props.city.getIn(["currentDistrict","comms"])
    const {recommender,customer,isAdding,isShowAddResult} = this.props
    const isPerfectInfo = recommender.get("isPerfectInfo")

    return (
      <div className="add-customer" ref="addCustomer">
        <main>
        <section >
        <span>职业经纪人</span>
        <RadioGroup name="ismajor" value={customer.get("ismajor")} items={radios} onChange={this._handleRadioChange.bind(this)} />

        </section>
        <span style={{
          fontSize:"20px",
          color:"#c80000",
          marginBottom:"20px",
          display:customer.get("ismajor")==1?"block":"none",
          textAlign:"center"
        }}>我希望自己完成该客户的跟进和带看</span>

        <DefaultInput
          label="企业名称"
          name="company"
          value={customer.get("company")}
          onChange = {this._handleNoValidate}
          onBlur={this._handleNoValidate}>
          </DefaultInput>
        <DefaultInput label="联系人"
          name= "contact"

          value={this.state.contact.value}
          isError={this.state.contact.isError}
          onChange={this._handleChange}
          onBlur={this._handleBlur}
          onFocus = {this._handleFocus}
        ></DefaultInput>
        <DefaultInput label="手机"
          name="tel"
          value={this.state.tel.value}
          isError={this.state.tel.isError}
          onChange={this._handleTelChange}
          onBlur={this._handleTelBlur}

          errorMessage={this.state.tel.errorMessage}
        ></DefaultInput>

        <DefaultSelect
          value={customer.get("demandstatus")}
          name="demandstatus"
          label="性质"

          options={Immutable.fromJS([{
            id:0,
            name:"求租"
          },
          {
            id:1,
            name:"求购"
          },
          // {
          //   id:2,
          //   name:"租购"
          // }
        ])}
          onChange={this._handleNoValidate}>
        </DefaultSelect>
        <TimeInput
          label="需求日期"
          name="demandtime"
          value={customer.get("demandtime")}
          onChange = {this._handleNoValidate}
          onBlur={this._handleNoValidate}
        ></TimeInput>
        <DefaultInput
          label="面积"
          name="area"
          value={customer.get("area")}
          onChange = {this._handleNoValidate}
          onBlur={this._handleNoValidate}

        ></DefaultInput>
        <DefaultInput
          className="md"
          value={customer.get("price")}
          onChange = {this._handleNoValidate}
          ref = "price"
          onBlur={this._handleNoValidate}
          name="price"
          label="价格">
        </DefaultInput>
        <DefaultSelect
          className="sm"
          value={customer.get("priceunit")}
          name="priceunit"
          options={switchPriceUnit(customer.get("demandstatus"))}
          onChange={this._handleNoValidate}></DefaultSelect>
        <DefaultSelect label="城市"
          value={customer.get("cityId")}
          options={citys} onChange={this._handleCityChange}></DefaultSelect>
        <DefaultSelect label="区域" options={districts} onChange={this._handleDistrictChange}></DefaultSelect>
        <DefaultSelect label="商圈" options={comms} onChange={this._handleCommChange}></DefaultSelect>
        <DefaultInput label="备注"
        name="rpremark"
        value={customer.get("rpremark")}
        onChange = {this._handleNoValidate}
        placeholder="指定专属经纪人或注明客户意向房源"
        onBlur={this._handleNoValidate.bind(this)}
        ></DefaultInput>

        </main>

        <Recommender isShowModify={false} onTap={(event)=>this.props.history.pushState(null, '/personalUpdate')} recommender={recommender}></Recommender>
        <footer>
          <Tappable style={{backgroundColor:isAdding?"#d63636":"#ef4f4f"}} component="div" onTap={this._handleAddCustomer}>
            {isAdding?"提交中...":"确认"}
          </Tappable>
        </footer>
        <Link className="protocol" to={'/protocol'}>确认表示您同意《楼天下合伙经纪人协议》</Link>
        <div className="bind-modal" style={{display:isShowAddResult&&isPerfectInfo?"block":"none"}}>
             <main>
                <img src={successImg}/>
                <h2>推荐成功</h2>
                <span style={{lineHeight:40/64+"rem"}}>是否继续推荐客源？</span>
                <footer>
                  <Tappable className="cancel" onTap={this._back2Customers}>返回列表</Tappable>
                  <Tappable className="save" onTap={this._goOnBuilding}>继续推荐</Tappable>
                </footer>
            </main>
        </div>
      </div>
    )
  }

  _handleRadioChange(event){
    this.props.dispatch(refreshCustomer({
      ismajor:event
    }))

    if(event ==0){
      this.setState({
        tel:{
          require : true,
          value :"",
          isError :false
        },
        contact:{
          value:"",
          require : true,
          isError :false
        }
      })
      this.props.dispatch(refreshCustomer({tel:"",contact:"",company:""}))
    }else {
      this.setState({
        tel:{
          require : true,
          value :this.props.recommender.get("tel"),
          isError :false
        },
        contact:{
          value:this.props.recommender.get("name"),
          require : true,
          isError :false
        }
      })
      this.props.dispatch(refreshCustomer({
          tel:this.props.recommender.get("tel"),
          contact:this.props.recommender.get("name"),
          company:""
        }))

    }
  }

  _handleNoValidate(event){
    const condition = {
      [event.target.name]:event.target.value
    }

    this.props.dispatch(refreshCustomer(condition))

    if(event.target.name =="demandstatus"&&event.target.value==1){
      this.props.dispatch(refreshCustomer({
        priceunit:4
      }))
    }

  }
  _handleFocus(event){

    this.setState({
      [event.target.name]:{
        ...this.state[event.target.name],
        isError:false
      }
    })
  }

  _handleBlur(event){
    if(!event.target.value==""){

        const condition = {
          [event.target.name]:event.target.value
        }
        this.props.dispatch(refreshCustomer(condition))

    }else {
      this.setState({
        [event.target.name]:{
          ...this.state[event.target.name],
          isError:true
        }
      })
    }

  }

  _handleTelBlur(event){
    this._handleTelChange(event)
    console.log(this.state.tel);
    if(!this.state.tel.isError&&this.props.customer.get("ismajor")==0){
          reqwest({
            url:`/renren/recommendsResource/verifyTel/${event.target.value}/${this.props.recommender.get("tokenId")}`
          }).then(data=>{
            if(data.data=="电话号码可以使用"){
              this.setState({
                tel:{
                  ...this.state.tel,
                  isError:false,
                  errorMessage:"号码被占用"
                }
              })

            }else {
              this.setState({
                tel:{
                  ...this.state.tel,
                  isError:true,
                  errorMessage:"号码被占用"
                }
              })
            }
          },(err)=>console.log(err))
    }
  }


  _handleChange(event){

      this._handleNoValidate(event)

    if(event.target.value==""){

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
  _handleTelChange(event){
      this._handleNoValidate(event)
      if(!(/(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/.test(event.target.value))){
            this.setState({
              tel:{
                value:event.target.value,
                isError:true,
                errorMessage:"请输入正确的手机号码"
              }
            })
      }else {
        this.setState({
          tel:{
            value:event.target.value,
            isError:false,
            errorMessage:"请输入正确的手机号码"
          }
        })
      }
  }

  _handleCityChange(event){
    const id = event.target.value;

    this.props.dispatch(fetchDistrictsAndComms(id))
    this.props.dispatch(refreshCustomer({
      cityid:id
    }))
    this.props.dispatch(setCurrentDsitrict(Immutable.fromJS({
      comms:[]
    })))


  }
  _handleDistrictChange(event){
    const currentDistrict = this.props.city.get("districts").find((district)=>district.get("id")==event.target.value)
    this.props.dispatch(setCurrentDsitrict(currentDistrict))
    this.props.dispatch(refreshCustomer({
      districtid:event.target.value
    }))
  }
  _handleCommChange(event){
    this.props.dispatch(refreshCustomer({
      commid:event.target.value
    }))
  }
  _handleAddCustomer(){
    if(!this.props.isAdding){
        for(var  key in this.state){

          this._handleBlur({target:{
            name:key,
            value:this.state[key].value
          }})
        }

        setTimeout((function(){

          const {contact,tel} = this.state
          if(!tel.isError&&!contact.isError){
            this.props.dispatch(addCustomer())
            if(!this.props.recommender.get("isPerfectInfo")){
              this.props.history.pushState(null, '/personalUpdate?from=customer')
            }

            this.refs.addCustomer.classList.add('fixed');


          }else{
            alert("请完成必填项后")
          }
        }).bind(this))
    }
  }

  _back2Customers(){
    this.props.dispatch(isShowAddResult(false))
    this.props.history.pushState(null, '/customers')


  }
  _goOnBuilding(){
    this.props.dispatch(isShowAddResult(false))
    this.refs.addCustomer.classList.remove('fixed');
    this.setState( {
      contact:{
        require : true,
        value :"",
        isError :false
      },
      tel:{
        require : true,
        value :"",
        isError :false
      }
    })
  }
  componentWillUnmount(){
    this.props.dispatch(isShowAddResult(false))

  }


}
