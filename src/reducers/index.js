import { combineReducers } from 'redux'
import auth from './auth'
import posters from './posters'

export default combineReducers({
  auth,
  posters
})