import reqwest from "reqwest"
import Immutable from "Immutable"
export const FETCH_CITYS = 'FETCH_CITYS'
export const FETCH_COMMS = 'FETCH_COMMS'
export const FETCH_DISTRICTS = 'FETCH_DISTRICTS'
export const FETCH_DISTRICTS_COMMS = 'FETCH_DISTRICTS_COMMS'
export const SET_CURRENT_DISTRICT = 'SET_CURRENT_DISTRICT'
export const SET_CURRENT_COMM = 'SET_CURRENT_COMM'
export const SET_TOKEN = "SET_TOKEN"
export const CLEAN_COMMS = "CLEAN_COMMS"


export function fetchCitys(){
  return (dispatch)=>{
    // dispatch({type:CLEAN_COMMS})
    reqwest({
      url:"/api/findCity"
    }).then(data=>dispatch({
      type:FETCH_CITYS,
      citys:Immutable.fromJS(data.data.map((city)=>({
        id:city.id,
        name:city.name
      })))
    }))
  }
}

export function fetchDistrictsAndComms(cityId){
  return (dispatch,getState)=>{
    reqwest({
      url:"api/loadDistrictTree/"+cityId
    }).then(data=>{
      dispatch({
        type:FETCH_DISTRICTS_COMMS,
        districts:Immutable.fromJS(data.data.map((district)=>({
          id:district.id,
          name:district.name,
          comms:district.commList.map((comm)=>({
            id:comm.id,
            name:comm.name
          }))
        })))
      })

      // if(cityId==802){
      //   console.log(getState().getIn(["city","districts"]).toJS());
      //   const currentDistrict = getState().getIn(["city","districts"]).find((district)=>district.get("id")==816)
      //   dispatch(setCurrentDsitrict(currentDistrict))
      //
      //
      // }else {
      //     console.log(getState().getIn(["city","districts"]).toJS());
      //   const currentDistrict = getState().getIn(["city","districts"]).find((district)=>district.get("id")==3235)
      //   dispatch(setCurrentDsitrict(currentDistrict))
      //
      //
      // }



    })

    // reqwest({
    //   url:"/api/findCity"
    // }).then((data)=>console.log(data))
  }
}



export function fetchDistricts(id){
  return (dispatch)=>{
    reqwest({
      url:"api/findArea/"+id
    }).then(data=>dispatch({
      type:FETCH_DISTRICTS,
      districts:Immutable.fromJS(data.data.map((district)=>({
        id:district.id,
        name:district.name,
        cityId:id
      })))
    }))
  }
}


export function fetchDistrictsIfNeed(id){
  return (dispatch,getState)=>{
    const first =getState().getIn(["city","districts"]).find((district)=>district.get("cityId")===id)
    console.log(first);
    if(first===undefined){
      dispatch(fetchDistricts(id))
    }


  }



}


export function fetchCitysIfNeed(){
  return (dispatch,getState)=>{
    if(getState().getIn(["city","citys"])){
      dispatch(fetchCitys())
    }
  }
}

export function setCurrentDsitrict(district){
  return {type:SET_CURRENT_DISTRICT,district}
}

export function setCurrentComm(comm){
  return {type:SET_CURRENT_COMM,comm}
}


export function getToken(id){
  // return {
  //   type:SET_TOKEN,
  //   // tokenId:data.data.tokenId
  //   tokenId:"b7d710f48882469ca85b1a67e1385f80"
  // }

  return (dispatch,getState)=>{
    reqwest({
      url:"/renren/recommendsResourcePeople/loginPeopleByOpenId/"+id
    }).then(data=>dispatch({
      type:SET_TOKEN,
      tokenId:data.data.tokenId

    }))
  }
}
