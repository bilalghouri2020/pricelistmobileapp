import { combineReducers } from 'redux'
// import main from './main'
// import cart from './cart'
// import checkout from './checkout'
import authentication from './authReducer'
// import userInfoForCheckout from './userInfoForCheckout'
// import profile from './profile'
// import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  authentication,
})

export default rootReducer
