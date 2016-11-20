// a reducer takes in 2 things, 1. the action, 2. copy of current state 

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const index = action.index
      return [
        ...state.slice(0, index), // before post updating
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1) // after post updating
      ]
    default:
      return state
  }
}

export default posts