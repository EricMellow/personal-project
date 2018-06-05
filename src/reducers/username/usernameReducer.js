const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_USERNAME':
      return action.username;
    case 'REMOVE_USERNAME':
      return '';
    default:
      return state;
  }
};

export default usernameReducer;