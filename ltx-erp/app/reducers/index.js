import { combineReducers } from 'redux-immutablejs';
import city from './city'
import personal from '../routes/PersonalRoutes/reducers'
import customer from '../routes/CustomerRoutes/reducers'
import property from '../routes/PropertyRoutes/reducers'


export default combineReducers({city,personal,customer,property});
