import { combineReducers } from 'redux'
import scores from './scores'

const scoreboardApp = combineReducers({
  scores
})

export default scoreboardApp
