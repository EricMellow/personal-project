const authUserReducer = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATED_USER':
      return true;
    default:
      return state;
  }
};

export default authUserReducer;