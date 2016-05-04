import {REQUEST_PERSONAL,UPDATE_PERSONAL,REFRESH_PERSONAL,iS_PERFECT_INFO,IS_SHOW_PULL_REWARD_RESULT,REQUEST_PULL_REWARD,RECEIVE_PULL_REWARD,RECEIVE_PULL_HISTORY,RECEIVE_MESSAGE_REWARD,RECEIVE_DEAL_REWARD,SET_CURRENT_REWARD,FETCH_PERSONAL,REQUEST_VALIDATE_RESULT,RECEIVE_VALIDATE_RESULT,IS_NEED_TO_VALIDATE} from "./actions"
import { createReducer } from 'redux-immutablejs'
import Immutable from 'Immutable'
import {SET_TOKEN} from "../../actions"



const initialState = Immutable.fromJS({
  name:"",
  sex :"",
  tel:"",
  bankcard:"",
  operator:"",
  resourcedealreward:"",//成交奖励
  surplusPrice:"",// 可提取奖励
  resourceinforeward:"",//信息奖励
  ktqPrice:"",
  tokenId:"",
  isPerfectInfo:false,
  isFetchingPersonal:false,
  validate:{
    validateTime:60,
    isNeedToValidate:true,
    isFetching:false,
    isSuccess :false
  },
  reward:{
    current:"message",
    message:{
      wait:0
    },
    deal:{
      wait:0
    },
    records:[],
    isPullRewarding:false,
    isShowPullRewardResult:false
  }
})



export default createReducer(initialState,{
  [FETCH_PERSONAL]:(state,action) =>  state.merge(action.personal),
  [UPDATE_PERSONAL]:(state,action) => state.merge(action.personal),
  [REQUEST_VALIDATE_RESULT]:(state,action) => state.mergeDeep({validate:{
    isFetching:true
  }}),
  [RECEIVE_VALIDATE_RESULT]:(state,action) => state.mergeDeep({
    validate:{
      isFetching:false,
      isSuccess:action.isSuccess
    }
  }),
  [IS_NEED_TO_VALIDATE]:(state,action) => state.mergeDeep({
    validate:{
      isNeedToValidate:action.isNeed
    }
  }),
  [SET_CURRENT_REWARD]:(state,action) => state.setIn(["reward","current"],action.currentReward),
  [RECEIVE_MESSAGE_REWARD]:(state,action) => state.mergeDeep({
    reward:{
      message:{
        wait:action.waitMessageReward,
        info:action.info,
        total:action.total
      }
    }

  }),
  [RECEIVE_DEAL_REWARD]:(state,action) => state.mergeDeep({
    reward:{
      deal:{
        wait:action.waitDealReward,
        info:action.info,
        total:action.total
      }
    }
  }),
  [RECEIVE_PULL_HISTORY]:(state,action) =>  state.setIn(["reward","records"],action.records),
  [REQUEST_PULL_REWARD]:(state,action) =>  state.setIn(["reward","isPullRwarding"],true),
  [RECEIVE_PULL_REWARD]:(state,action) =>  state.setIn(["reward","isPullRwarding"],false),
  [IS_SHOW_PULL_REWARD_RESULT]:(state,action) =>  state.setIn(["reward","isShowPullRewardResult"],action.isShow),
  [SET_TOKEN]:(state,action) => state.mergeDeep({tokenId:action.tokenId}),
  [iS_PERFECT_INFO]:(state,action) => state.mergeDeep({isPerfectInfo:action.isPerfect}),
  [REFRESH_PERSONAL]:(state,action) => state.mergeDeep(action.personal),
  [REQUEST_PERSONAL]:(state,action) => state.set("isFetchingPersonal",true)

})
