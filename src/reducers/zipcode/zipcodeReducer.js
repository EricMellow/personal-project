const zipcodeReducer = (state = 80204, action) => {
  switch (action.type) {
    case 'ADD_ZIPCODE':
      return action.zipcode;
    default:
      return state;
  }
};

export default zipcodeReducer;