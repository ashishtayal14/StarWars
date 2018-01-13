import { combineReducers } from 'redux'
import { planets, search } from './reducer'

const techinfomasterReducer = combineReducers({
  planets,
  search,
})

export default techinfomasterReducer;
