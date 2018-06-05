const zipcodeReducer = (state = 80204, action) => {
  switch (action.type) {
    case 'ADD_ZIPCODE':
      return action.zipcode;
    case 'REMOVE_ZIPCODE':
      return 80204;
    default:
      return state;
  }
};

export default zipcodeReducer;