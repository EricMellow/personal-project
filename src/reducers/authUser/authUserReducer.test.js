import authUserReducer from "./authUserReducer";

describe('authUserReducer', () => {

  it('should return true when passed an AUTHENTICATED_USER action', () => {
    const initialState = false;
    const mockAction = {
      type: 'AUTHENTICATED_USER'
    };

    const result = authUserReducer(initialState, mockAction);

    expect(result).toEqual(true);
  });

  it('should return false when passed an REMOVE_USER action', () => {
    const initialState = true;
    const mockAction = {
      type: 'REMOVE_USER'
    };

    const result = authUserReducer(initialState, mockAction);

    expect(result).toEqual(false);
  });

  it('should return the initialState when passed an action not related to authenticating a user', () => {
    const initialState = false;
    const mockAction = {
      type: 'ADD_USER_ID'
    };

    const result = authUserReducer(initialState, mockAction);

    expect(result).toEqual(initialState);
  });

  it('should return false as a default state', () => {
    const mockActivity = { type: 'ADD_ZIPCODE' };
    const result = authUserReducer(undefined, mockActivity);

    expect(result).toEqual(false);
  });

});