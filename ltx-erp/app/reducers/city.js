import {FETCH_CITYS,CLEAN_COMMS,FETCH_DISTRICTS,FETCH_COMMS,FETCH_DISTRICTS_COMMS,SET_CURRENT_DISTRICT,SET_CURRENT_COMM} from "../actions"
import { createReducer } from 'redux-immutablejs'
import Immutable from 'Immutable'




const initialState = Immutable.fromJS({ citys:[],districts:[],comms:[] })



export default createReducer(initialState,{
  [FETCH_CITYS]:(state,action) => state.set("citys",action.citys),
  [CLEAN_COMMS]:(state,action) => state.set("currentDistrict",Immutable.fromJS({})),
  [FETCH_DISTRICTS]:(state,action) => state.update("districts",(districts)=>districts.concat(action.districts)),
  [FETCH_COMMS]:(state,action) => state.update("comms",(comms)=>comms.concat(action.comms)),
  [FETCH_DISTRICTS_COMMS]:(state,action) =>state.set("districts",action.districts),
  [SET_CURRENT_DISTRICT]:(state,action)=> state.set("currentDistrict",action.district),
  [SET_CURRENT_COMM]:(state,action)=> state.set("currentComm",action.comm),
})
