// a reducer takes in 2 things, 1. the action, 2. copy of current state 

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return new state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        // from start to comment to be deleted
        ...state.slice(0, action.index),
        // onward after deleted one to glory!
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
  return state
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite this post w/new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments