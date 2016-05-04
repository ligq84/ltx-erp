import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers'
import Immutable from 'immutable';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)




const state = Immutable.fromJS({});
const store = reducer(state);


export default createStoreWithMiddleware(reducer,store)
