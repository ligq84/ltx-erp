import reqwest from "reqwest"
import Immutable from "Immutable"
export const REQUEST_CUSTOMERS = "REQUEST_CUSTOMERS"
export const RECEIVE_CUSTOMERS ="RECEIVE_CUSTOMERS"
export const REQUEST_CUSTOMER = "REQUEST_CUSTOMER"
export const RECEIVE_CUSTOMER ="RECEIVE_CUSTOMER"
export const REFRESH_CUSTOMER = "REFRESH_CUSTOMER"
export const REQUEST_ADD_CUSTOMER = "REQUEST_ADD_CUSTOMER"
export const RECEIVE_ADD_CUSTOMER = "RECEIVE_ADD_CUSTOMER"
export const IS_SHOW_ADD_CUSTOMER_RESULT = "IS_SHOW_ADD_CUSTOMER_RESULT"
export function fetchCustomers (rpid){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])

    dispatch({type:"REQUEST_CUSTOMERS"})
    reqwest({
      url:"/renren/recommendsResource/wxlist/"+tokenId
    }).then(data=>dispatch({type:"RECEIVE_CUSTOMERS",customers:data.data}))
  }
}


export function fetchCustomer(id){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    dispatch({type:"REQUEST_CUSTOMER"})
    reqwest({
      url:"/renren/recommendsResource/id/"+id+"/"+tokenId
    }).then(data=>dispatch({type:"RECEIVE_CUSTOMER",customer:{
      ...data.data.RecommendsResource,
      logInfo:data.data.logInfo||[]
    }}))
  }
}


export function refreshCustomer(condition){

  return {type:"REFRESH_CUSTOMER",condition:Immutable.fromJS(condition)}
}
export function addCustomer(){

  return (dispatch,getState)=>{
    const customer = getState().getIn(["customer","addDetail"]).toJS()
    const state = getState()
    const tokenId = state.getIn(["personal","tokenId"])
    dispatch({type:REQUEST_ADD_CUSTOMER,isAdding:true})

    reqwest({
      url:'/renren/recommendsResource/add',
      method:'post',
      data:{
        ...customer,
        tokenId:tokenId
      }
    }).then(data=>dispatch({
      type:RECEIVE_ADD_CUSTOMER,
      isAddSuccess:true,
      isAdding:false
    }))
  }
}

export function isShowAddResult(isShow){
  return {
    type:IS_SHOW_ADD_CUSTOMER_RESULT,
    isShow
  }
}
