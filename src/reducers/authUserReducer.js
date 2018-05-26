const authUserReducer = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATED_USER':
      return true;
    case 'REMOVE_USER':
      return false;
    default:
      return state;
  }
};

export default authUserReducer;