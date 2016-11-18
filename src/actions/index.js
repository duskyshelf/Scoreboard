import * as types from '../constants/ActionTypes'

let nextScoreID = 0
export const addScore = (name, score) => ({
  type: types.ADD_SCORE,
  id: nextScoreID++,
  name,
  score
})
