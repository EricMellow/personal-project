const zipcodeReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_ZIPCODE':
      return action.zipcode;
    default:
      return state;
  }
};

export default zipcodeReducer;