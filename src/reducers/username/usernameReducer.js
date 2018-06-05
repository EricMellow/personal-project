const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_USERNAME':
      return action.username
    default:
      return state
  }
}

export default usernameReducer