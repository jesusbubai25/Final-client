import {createStore,combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import {  GHI_GTI_data, efficiency, heatmapData, inverterSmbMonthlyLoss, inverterSmbYearlyLoss, monthly_inverter_efficiency, normalizedEnergyDetails, plantDetail } from './reducers/inverterReducers'
import {  allow_user, registred_users, user } from './reducers/userReducers'

const reducer=combineReducers({
    efficiency:efficiency,
    monthly_inverter_efficiency:monthly_inverter_efficiency,
    energy:normalizedEnergyDetails,
    GHI_GTI_data:GHI_GTI_data,
    user:user,
    registred_users:registred_users,
    allow_user:allow_user,
    plantDetail:plantDetail,
    inverterSmbYearlyLoss,
    inverterSmbMonthlyLoss,
    heatmapData

})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      return reducer(undefined, action)
    }
  
    return reducer(state, action)
  }
const middleware=[thunk];

let initialState={};

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;


