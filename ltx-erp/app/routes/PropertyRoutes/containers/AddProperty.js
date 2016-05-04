import './AddProperty.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'Immutable'
import pureRender from "pure-render-decorator"
import {fetchCitysIfNeed,fetchDistrictsIfNeed,fetchDistrictsAndComms,setCurrentDsitrict} from '../../../actions'
import {fetchPersonalIfNeed} from '../../PersonalRoutes/actions'
import DefaultSelect from "../../../components/DefaultSelect"
import ValidateSelect from "../../../components/ValidateSelect"
import DefaultInput from "../../../components/DefaultInput"
import Recommender  from "../../CustomerRoutes/components/Recommender"
import {refreshProperty,addProperty,fetchBuildings,isShowAddResult,cleanBuildings} from "../actions"
import Tappable from "react-tappable"
import {successImg} from "../../../img/succeed-pic.png"
import { Link } from 'react-router'
import Loading from '../../../components/Loading'

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


@pureRender
@connect((state)=>({
  city:state.get("city"),
  recommender:state.get("personal"),
  property:state.getIn(["property","addDetail"]),
  isAdding:state.getIn(["property","isAdding"]),
  buildings:state.getIn(["property","buildings"]),
  isShowAddResult:state.getIn(["property","isShowAddResult"]),


}))
export default class  extends Component {
  constructor(props){
    super(props)
    this._handleChange=this._handleChange.bind(this)
    this._handleCityChange=this._handleCityChange.bind(this)
    this._handleDistrictChange=this._handleDistrictChange.bind(this)
    this._handleCommChange=this._handleCommChange.bind(this)
    this._handleAddProperty = this._handleAddProperty.bind(this)
    this._handlebBuildingChange = this._handlebBuildingChange.bind(this)
    this._back2Buildings = this._back2Buildings.bind(this)
    this._goOnBuilding = this._goOnBuilding.bind(this)
    this._handleNoValidate = this._handleNoValidate.bind(this)

        this.state={
          buildingId:{
            require : true,
            value :"",
            isError :false
          },
          blockname:{
            require : true,
            value :"",
            isError :false
          },
          unitnum:{
            require : true,
            value :"",
            isError :false
          },
          price:{
            require : true,
            value :"",
            isError :false
          },
          area:{
            require : true,
            value :"",
            isError :false
          },
          ownerTel:{
            require : true,
            value :"",
            isError :false
          }
        }
  }

  componentDidMount(){
    const {dispatch} =this.props;
    dispatch(fetchCitysIfNeed())
    dispatch(fetchPersonalIfNeed())
    document.title = '我有房源';
    // this.props.dispatch(fetchDistrictsAndComms(802))

    setTimeout((function(){
      this.props.dispatch(fetchBuildings(15))
    }).bind(this),800)

    this.setState({
      buildingId:{
        require : true,
        value :this.props.property.get("buildingId"),
        isError :false
      },
      blockname:{
        require : true,
        value :this.props.property.get("blockname"),
        isError :false
      },
      unitnum:{
        require : true,
        value :this.props.property.get("unitnum"),
        isError :false
      },
      price:{
        require : true,
        value :this.props.property.get("price"),
        isError :false
      },
      area:{
        require : true,
        value :this.props.property.get("area"),
        isError :false
      },
      ownerTel:{
        require : true,
        value :this.props.property.get("ownerTel"),
        isError :false
      }
    })



  }
  componentWillRecieveProps(){

  }

  render() {
    const {recommender} = this.props


    return recommender.get("isFetchingPersonal")?this.renderIfFetching():this.renderIfComplete()
  }


  renderIfFetching() {
    return (
      <Loading></Loading>
    )
  }

  renderIfComplete() {
    const citys = this.props.city.get("citys")
    console.log(citys.toJS());
    const districts = this.props.city.get("districts")
    const comms = this.props.city.getIn(["currentDistrict","comms"])
    const buildings = this.props.buildings
    const {recommender,property,isAdding,isShowAddResult} = this.props
    const isPerfectInfo = recommender.get("isPerfectInfo")
    return (
      <div className="add-property" ref="addProperty">
        <main>
        <DefaultSelect
          label="城市"
          placeholder="请选择"
          options={citys}
          onChange={this._handleCityChange}></DefaultSelect>
        <DefaultSelect
          label="区域"
          options={districts}
          onChange={this._handleDistrictChange}></DefaultSelect>
        <DefaultSelect
          ref = "comms"
          label="商圈"
          options={comms}
          onChange={this._handleCommChange}></DefaultSelect>
        <ValidateSelect
          label="楼盘"
          name="buildingId"
          placeholder={!comms?"请先选择城市、区域和商圈":"请选择"}
          options={buildings}
          value = {this.state.buildingId.value}
          isError={this.state.buildingId.isError}
          onChange={this._handlebBuildingChange}></ValidateSelect>
        <DefaultInput
          onChange={this._handleChange.bind(this)}
          ref = "blockname"
          value={this.state.blockname.value}
          onBlur={this._handleBlur.bind(this)}
          name="blockname"
          placeholder="请输入栋座，如独栋，A栋"
          isError={this.state.blockname.isError}
          onFocus = {this._handleFocus.bind(this)}
          label="栋座">
        </DefaultInput>
        <DefaultInput
          onChange={this._handleChange.bind(this)}
          ref = "unitnum"
          value={this.state.unitnum.value}
          onBlur={this._handleBlur.bind(this)}
          name="unitnum"
          placeholder="请输入单元号，如1001"
          isError={this.state.unitnum.isError}
          label="单元号"
          onFocus = {this._handleFocus.bind(this)}
          >
        </DefaultInput>

        <DefaultSelect
          value={property.get("status")}
          name="status"
          label="性质"
          options={Immutable.fromJS([{
            id:0,
            name:"可租"
          },
          {
            id:1,
            name:"可售"
          },
          // {
          //   id:2,
          //   name:"租售"
          // }
          ])}
          onChange={this._handleNoValidate}></DefaultSelect>
        <DefaultInput
          className="md"
          onChange={this._handleChange.bind(this)}
          ref = "price"
          value={this.state.price.value}
          onBlur={this._handleBlur.bind(this)}
          isError={this.state.price.isError}
          onFocus = {this._handleFocus.bind(this)}
          name="price"
          label="价格">
        </DefaultInput>
        <DefaultSelect
          className="sm"
          value={property.get("priceunit")}
          name="priceunit"
          options={switchPriceUnit(property.get("status"))}
          onChange={this._handleNoValidate}></DefaultSelect>

        <DefaultInput
          onChange={this._handleChange.bind(this)}
          ref = "area"
          value={this.state.area.value}
          isError={this.state.area.isError}
          onBlur={this._handleBlur.bind(this)}
          onFocus = {this._handleFocus.bind(this)}
          name="area"
          label="面积">
        </DefaultInput>
        <DefaultInput
          onChange={this._handleChange.bind(this)}
          value={this.state.ownerTel.value}
          isError={this.state.ownerTel.isError}
          onBlur={this._handleBlur.bind(this)}
          onFocus = {this._handleFocus.bind(this)}
          name="ownerTel"
          errorMessage={"请输入正确的手机号"}
          label="业主电话">
        </DefaultInput>
        <DefaultInput
          value={property.get("rpremark")}
          onChange={this._handleNoValidate.bind(this)}
          onBlur={this._handleNoValidate.bind(this)}
          name="rpremark"
          label="备注">
        </DefaultInput>

        </main>

        <Recommender isShowModify={false} onTap={(event)=>this.props.history.pushState(null, '/personalUpdate')} recommender={recommender}></Recommender>
        <footer>
          <Tappable style={{backgroundColor:isAdding?"#d63636":"#ef4f4f"}} component="div" onTap={this._handleAddProperty}>
            {isAdding?"提交中...":"确认"}
          </Tappable>
        </footer>
        <Link className="protocol" to={'/protocol'}>确认表示您同意《楼天下合伙经纪人协约》</Link>

        <div className="bind-modal" style={{display:isShowAddResult&&isPerfectInfo?"block":"none"}}>
             <main>
                <img src={successImg}/>
                <h2>推荐成功</h2>
                <span style={{lineHeight:40/64+"rem"}}>继续推荐该楼盘的房源？</span>
                <footer>
                  <Tappable className="cancel" onTap={this._back2Buildings}>返回列表</Tappable>
                  <Tappable className="save" onTap={this._goOnBuilding}>继续推荐</Tappable>
                </footer>
            </main>
        </div>

      </div>
    )
  }
  _handleNoValidate(event){

    const condition = {
      [event.target.name]:event.target.value
    }
    this.props.dispatch(refreshProperty(condition))
    if(event.target.name =="status"&&event.target.value==1){
      this.props.dispatch(refreshProperty({
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
      this.props.dispatch(refreshProperty(condition))
    }else {
      this.setState({
        [event.target.name]:{
          ...this.state[event.target.name],
          isError:true
        }
      })
    }
  }
  _handleChange(event){
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
  _handleCityChange(event){
    const id = event.target.value;

    //this.props.dispatch(setCurrentCity(id))
    this.props.dispatch(fetchDistrictsAndComms(id))
    this.props.dispatch(cleanBuildings())
    this.props.dispatch(setCurrentDsitrict(Immutable.fromJS({
      comms:[]
    })))
  }
  _handleDistrictChange(event){
    const currentDistrict = this.props.city.get("districts").find((district)=>district.get("id")==event.target.value)
    console.log(55,currentDistrict.toJS());
    this.props.dispatch(setCurrentDsitrict(currentDistrict))
    this.props.dispatch(cleanBuildings())
  }
  _handleCommChange(event){
    this.props.dispatch(fetchBuildings(event.target.value));

  }
  _handlebBuildingChange(event){
    this.setState({
      buildingId:{
        value:event.target.value
      }
    })
    this._handleBlur(event)
  }

  _handleAddProperty(){
    if(!this.props.isAdding){
        for(var  key in this.state){

          this._handleBlur({target:{
            name:key,
            value:this.state[key].value
          }})
        }

        setTimeout((function(){
          const {blockname,unitnum,price,area,buildingId} = this.state
          if(!buildingId.isError&&!blockname.isError&&!unitnum.isError&&!price.isError&&!area.isError){


            this.props.dispatch(addProperty())
            if(!this.props.recommender.get("isPerfectInfo")){
              this.props.history.pushState(null, '/personalUpdate?from=property')
            }
            this.refs.addProperty.classList.add('fixed');

          }else{
            alert("请完成必填项填写")
          }
        }).bind(this))
    }
  }
  _back2Buildings(){
    this.props.dispatch(isShowAddResult(false))
    this.props.history.pushState(null, '/propertys')

  }
  _goOnBuilding(){
    this.props.dispatch(isShowAddResult(false))
    this.refs.addProperty.classList.remove('fixed');
    this.setState({
      buildingId:{
        require : true,
        value :"",
        isError :false
      },
      blockname:{
        require : true,
        value :"",
        isError :false
      },
      unitnum:{
        require : true,
        value :"",
        isError :false
      },
      price:{
        require : true,
        value :"",
        isError :false
      },
      area:{
        require : true,
        value :"",
        isError :false
      },
      ownerTel:{
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
