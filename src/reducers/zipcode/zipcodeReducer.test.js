import zipcodeReducer from "./zipcodeReducer";

describe('zipcodeReducer', () => {

  it('should return a zip code when passed an ADD_ZIPCODE action', () => {
    const initialState = 80204;
    const mockAction = {
      type: 'ADD_ZIPCODE',
      zipcode: 90210
    };

    const result = zipcodeReducer(initialState, mockAction);

    expect(result).toEqual(90210);
  });

  it('should return 80204 when passed a REMOVE_ZIPCODE action', () => {
    const initialState = 90210;
    const mockAction = {
      type: 'REMOVE_ZIPCODE'
    };

    const result = zipcodeReducer(initialState, mockAction);

    expect(result).toEqual(80204);
  });

  it('should return the initialState when passed an action not related to adding a zipcode', () => {
    const initialState = 80204;
    const mockAction = {
      type: 'ADD_USER_ID'
    };

    const result = zipcodeReducer(initialState, mockAction);

    expect(result).toEqual(initialState);
  });

  it('should return 80204 as a default state', () => {
    const mockActivity = { type: 'REMOVE_USER' };
    const result = zipcodeReducer(undefined, mockActivity);

    expect(result).toEqual(80204);
  });

});