let nextScoreID = 0
export const addScore = (text) => ({
  type: 'ADD_SCORE',
  id: nextScoreID++,
  text
})
