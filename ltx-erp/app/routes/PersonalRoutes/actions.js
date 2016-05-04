import reqwest from "reqwest"
import Immutable from "Immutable"
export const UPDATE_PERSONAL= "UPDATE_PERSONAL"
export const FETCH_PERSONAL= "FETCH_PERSONAL"
export const RECEIVE_VALIDATE_RESULT="RECEIVE_VALIDATE_RESULT"
export const REQUEST_VALIDATE_RESULT="REQUEST_VALIDATE_RESULT"
export const IS_NEED_TO_VALIDATE = "IS_NEED_TO_VALIDATE"
export const SET_CURRENT_REWARD = "SET_CURRENT_REWARD"
export const RECEIVE_MESSAGE_REWARD = "RECEIVE_MESSAGE_REWARD"
export const RECEIVE_DEAL_REWARD = "RECEIVE_DEAL_REWARD"
export const RECEIVE_PULL_HISTORY = "RECEIVE_PULL_HISTORY"
export const REQUEST_PULL_REWARD = "REQUEST_PULL_REWARD"
export const RECEIVE_PULL_REWARD = "RECEIVE_PULL_REWARD"
export const IS_SHOW_PULL_REWARD_RESULT = "IS_SHOW_PULL_REWARD_RESULT"
export const iS_PERFECT_INFO = "iS_PERFECT_INFO"
export const REFRESH_PERSONAL = "REFRESH_PERSONAL"
export const REQUEST_PERSONAL = "REQUEST_PERSONAL"


export function fetchPersonal(){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    dispatch({
      type:REQUEST_PERSONAL
    })


    reqwest({
      url:"/renren/recommendsResourcePeople/id/"+tokenId
    }).then((data)=>{
      //如果有手机号  就不需要 绑定 显示 解绑

      if (data.data.tel&&(""+data.data.tel).length>0) {

        dispatch(isNeedToValidate(false))

        if(data.data.name&&(""+data.data.name).length>0){
          dispatch(isPerfectInfo(true))
        }

      }else {
        dispatch(isNeedToValidate(true))
      }
      dispatch({type:FETCH_PERSONAL,personal:Immutable.fromJS({
        ...data.data,
        isFetchingPersonal:false
      })})
    })
  }
}

export function isPerfectInfo(isPerfect){
  return {
    type:iS_PERFECT_INFO,
    isPerfect
  }
}


export function isNeedToValidate(isNeed){

  return {type:IS_NEED_TO_VALIDATE,isNeed}
}


export function fetchPersonalIfNeed(){

  return (dispatch,getState)=>{
    if(getState().get("personal").get("name")===""){
      dispatch(fetchPersonal())
    }
  }
}

export function sendValidateCode(tel){
  return (dispatch,getState)=>{
    reqwest({
      url:"/renren/recommendsResourcePeople/sendValidateCode/"+tel
    }).then((data)=>console.log(data))
  }
}


export function validateCode(tel,code){

  return (dispatch,getState)=>{
    dispatch({type:REQUEST_VALIDATE_RESULT})
    reqwest({
      url:"/renren/recommendsResourcePeople/validateCode/"+tel+"/"+code
    }).then((data)=>{
      const state = getState()
      //成功
      if(data.data){
        dispatch(updatePersonal())
      }




      dispatch({type:RECEIVE_VALIDATE_RESULT,isSuccess:data.data})

    })
  }
}


export  function updatePersonal(newPerson){
  return (dispatch,getState)=>{
    const state = getState()
    const tokenId = state.getIn(["personal","tokenId"])
    dispatch({
      type:REQUEST_PERSONAL
    })
    reqwest({
      url:"/renren/recommendsResourcePeople/update",
      data:{
        name:state.getIn(["personal","name"]),
        tel:state.getIn(["personal","tel"]),
        bankcard:state.getIn(["personal","bankcard"]),
        tokenId:tokenId
      },
      method:"post"
    }).then(data=>dispatch(fetchPersonal()))
  }
}

export function setCurrentReward(currentReward){

  return {type:SET_CURRENT_REWARD,currentReward}

}
export function fetchMessageReward(id){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    reqwest({
      url:"/renren/rewardInfo/getRewardList/1/"+tokenId
    }).then(data=>dispatch({
      type:RECEIVE_MESSAGE_REWARD,
        waitMessageReward:data.data.notgetInfo,
        waitDealReward   :data.data.getNotgetTurnover,
        info             :data.data.RewardInfo,
          total:data.data.total
    }))
  }
}

export function fetchDealReward(id){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    reqwest({
      url:"/renren/rewardInfo/getRewardList/2/"+tokenId
    }).then(data=>{
      dispatch({
        type:RECEIVE_DEAL_REWARD,
        waitMessageReward:data.data.notgetInfo,
        waitDealReward   :data.data.getNotgetTurnover,
        info             :data.data.RewardInfo,
        total:data.data.total
      })

    })
  }
}


export function fetchPullHistory(id){
  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    reqwest({
      url:"/renren/rewardApplyLog/getRewardApplyLogList/"+tokenId
    }).then(data=>dispatch({
      type:RECEIVE_PULL_HISTORY,
      records:Immutable.fromJS(data.data.map(record=>({
        time:record.applytime,
        remark:record.remark,
        bankNum:record.bankCard,
        id:record.id
      })))
    }))
  }

}

export function fullReward(num){

  return (dispatch,getState)=>{
    const tokenId = getState().getIn(["personal","tokenId"])
    dispatch({
      type:REQUEST_PULL_REWARD
    })
    const state = getState()

    reqwest({
      url:"/renren/rewardApplyLog/add",
      method:"post",
      data:{
        applyprice:num,
        tokenId:tokenId
      }
    }).then(data=>{
      dispatch(fetchPersonal())
      dispatch({
        type:RECEIVE_PULL_REWARD
      })
      dispatch(isShowPullRewardResult(true))
    });
  }

}
export function isShowPullRewardResult(isShow){
  return {
    type:IS_SHOW_PULL_REWARD_RESULT,
    isShow
  }
}


export function refreshPersonal(personal){
  return {
    type:REFRESH_PERSONAL,
    personal

  }


}
