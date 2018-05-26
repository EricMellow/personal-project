const userIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_USER_ID':
      return action.userId;
    case 'REMOVE_USER_ID':
      return null;
    default:
      return state;
  }
};

export default userIdReducer;