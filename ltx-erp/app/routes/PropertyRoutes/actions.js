import reqwest from "reqwest"
import Immutable from "Immutable"

export const REQUEST_PROPERTYS = "REQUEST_PROPERTYS"
export const RECEIVE_PROPERTYS ="RECEIVE_PROPERTYS"
export const RECEIVE_PROPERTY = "RECEIVE_PROPERTY"
export const REQUEST_PROPERTY ="REQUEST_PROPERTY"
export const REFRESH_PROPERTY = "REFRESH_PROPERTY"
export const IS_SHOW_ADD_RESULT = "IS_SHOW_ADD_RESULT"
export const REQUEST_ADD_PROPERTY = "REQUEST_ADD_PROPERTY"
export const RECEIVE_ADD_PROPERTY = "RECEIVE_ADD_PROPERTY"
export const REQUEST_PROPERTY_BUILDINGS = "REQUEST_PROPERTY_BUILDINGS"
export const RECEIVE_PROPERTY_BUILDINGS = "RECEIVE_PROPERTY_BUILDINGS"


export function refreshProperty(condition){
  return {type:"REFRESH_PROPERTY",condition:Immutable.fromJS(condition)}
}


export function fetchProperty (id){

  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    dispatch({type:"REQUEST_PROPERTY"})

    reqwest({
      url:"/renren/recommendsUnit/id/"+id+"/"+tokenId
    }).then(data=>dispatch({type:"RECEIVE_PROPERTY",property:{
      ...data.data.RecommendsUnit,
      logInfo:data.data.logInfo||[]
    }}))
  }
}





export function addProperty(){

  return (dispatch,getState)=>{
    const property = getState().getIn(["property","addDetail"]).toJS()
    const city =  getState().get("city")
    const state = getState()
    const tokenId = state.getIn(["personal","tokenId"])

    dispatch({type:"REQUEST_ADD_PROPERTY",isAdding:true})

    reqwest({
      url:'/renren/recommendsUnit/add',
      method:'post',
      data:{
        ...property,
        tokenId:tokenId
      }
    }).then(data=>dispatch({
      type:RECEIVE_ADD_PROPERTY,
      isAddSuccess:true,
      isAdding:false
    }))
  }
}

export function fetchBuildings(commId){

  return (dispatch,getState)=>{

    reqwest({
      url:'/api/building/getListAll?commId='+commId,
    }).then(data=>dispatch({
      type:RECEIVE_PROPERTY_BUILDINGS,
      buildings:data.data.map(building=>({
        name:building.buildingName,
        id:building.buildingId,
      }))
    }))
  }
}

export function cleanBuildings(){
return {
  type:RECEIVE_PROPERTY_BUILDINGS,
  buildings:[]
  }
}

export function isShowAddResult(isShow){
  return {
    type:IS_SHOW_ADD_RESULT,
    isShow
  }
}


export function fetchPropertys (rpid){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    dispatch({type:"REQUEST_PROPERTYS"})
    reqwest({
      url:"/renren/recommendsUnit/wxlist/"+tokenId
    }).then(data=>dispatch({type:"RECEIVE_PROPERTYS",propertys:data.data}))
  }
}
