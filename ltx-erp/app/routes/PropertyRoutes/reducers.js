import {REQUEST_PROPERTYS,RECEIVE_PROPERTY_BUILDINGS,RECEIVE_PROPERTYS,REFRESH_PROPERTY,RECEIVE_PROPERTY,REQUEST_PROPERTY,IS_SHOW_ADD_RESULT,REQUEST_ADD_PROPERTY,RECEIVE_ADD_PROPERTY} from "./actions"
import { createReducer } from 'redux-immutablejs'
import Immutable from 'Immutable'


const initialState = Immutable.fromJS({
  datas:[],
  isPropertysFetching:true,
  detail:{},
  isPropertyFetching:true,
  addDetail:{
    priceunit:1,
    status:0
  },
  isAdding:false,
  isAddSuccess:false,
  isShowAddResult:false,
  buildings:[]
})


export default createReducer(initialState,{
  [REQUEST_PROPERTYS]:(state,action) =>  state.set("isPropertysFetching",true),
  [RECEIVE_PROPERTYS]:(state,action) => state.set("datas",Immutable.fromJS(action.propertys)),
  [REQUEST_PROPERTY]:(state,action) =>  {
    state.set("isPropertyFetching",true)
    return state.set("detail",Immutable.fromJS({}))
  },
  [RECEIVE_PROPERTY]:(state,action) => state.mergeDeep(Immutable.fromJS({
    isPropertyFetching:false,
    detail  :action.property
  })),
  [REFRESH_PROPERTY]:(state,action) => state.mergeDeep({addDetail:action.condition}),
  [REQUEST_ADD_PROPERTY]:(state,action) =>  state.set("isAdding",true),
  [RECEIVE_PROPERTY_BUILDINGS]:(state,action) => state.set("buildings",Immutable.fromJS(action.buildings)),
  [RECEIVE_ADD_PROPERTY]:(state,action) => state.merge({
    isAdding:false,
    isAddSuccess:true,
    isShowAddResult:true,
    addDetail:{
      priceunit:1,
      status:0
    }
  }),
  [IS_SHOW_ADD_RESULT]:(state,action) =>  state.set("isShowAddResult",action.isShow),

})
