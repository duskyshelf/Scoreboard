const score = (state, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    // case 'TOGGLE_SCORE':
    //   if (state.id !== action.id) {
    //     return state
    //   }
    //
    //   return {
    //     ...state,
    //     completed: !state.completed
    //   }
    default:
      return state
  }
}

const scores = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return [
        ...state,
        score(undefined, action)
      ]
    // case 'TOGGLE_SCORE':
    //   return state.map(t =>
    //     score(t, action)
    //   )
    default:
      return state
  }
}

export default scores
