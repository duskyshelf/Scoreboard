import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('scoreboard actions', () => {
  it('addTodo should create ADD_SCORE action', () => {
    expect(actions.addScore('David', '100')).toEqual({
      type: types.ADD_SCORE,
      id: 0,
      name: 'David',
      score: '100'
    })
  })
});
