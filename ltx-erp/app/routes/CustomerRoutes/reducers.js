import {REFRESH_CUSTOMER,IS_SHOW_ADD_CUSTOMER_RESULT,REQUEST_ADD_CUSTOMER,RECEIVE_ADD_CUSTOMER,REQUEST_CUSTOMERS,RECEIVE_CUSTOMERS,RECEIVE_CUSTOMER,REQUEST_CUSTOMER} from "./actions"
import { createReducer } from 'redux-immutablejs'
import Immutable from 'Immutable'


const initialState = Immutable.fromJS({
  datas:[],
  isCustomersFetching:true,
  detail:{},
  isCustomerFetching:true,
  isAdding:false,
  addDetail:{
    demandstatus:0,
    priceunit:1,
    ismajor:0
  }
})


export default createReducer(initialState,{
  [REQUEST_CUSTOMERS]:(state,action) =>  state.set("isCustomersFetching",true),
  [RECEIVE_CUSTOMERS]:(state,action) => state.set("datas",Immutable.fromJS(action.customers)),
  [REQUEST_CUSTOMER]:(state,action) =>  {
    state.set("isCustomerFetching",true)
    return state.set("detail",Immutable.fromJS({}))
  },
  [RECEIVE_CUSTOMER]:(state,action) => state.merge(Immutable.fromJS({
    isCustomerFetching:false,
    detail  :action.customer
  })),
  [REFRESH_CUSTOMER]:(state,action) => state.mergeDeep({addDetail:action.condition}),
  [REQUEST_ADD_CUSTOMER]:(state,action) =>  state.set("isAdding",true),
  [RECEIVE_ADD_CUSTOMER]:(state,action) => state.merge({
    isAdding:false,
    isAddSuccess:true,
    isShowAddResult:true,
    addDetail:{
      demandstatus:0,
      priceunit:1,
      ismajor:0
    }
  }),
  [IS_SHOW_ADD_CUSTOMER_RESULT]:(state,action) =>  state.set("isShowAddResult",action.isShow),
})
