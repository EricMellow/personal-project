import userIdReducer from "./userIdReducer";

describe('userIdReducer', () => {

  it('should return the userId when passed an ADD_USER_ID action', () => {
    const initialState = null;
    const mockAction = {
      type: 'ADD_USER_ID',
      userId: 'abc123'
    };

    const result = userIdReducer(initialState, mockAction);

    expect(result).toEqual('abc123');
  });

  it('should return null when passed an REMOVE_USER_ID action', () => {
    const initialState = 'abc123';
    const mockAction = {
      type: 'REMOVE_USER_ID'
    };

    const result = userIdReducer(initialState, mockAction);

    expect(result).toEqual(null);
  });

  it('should return the initialState when passed an action not related to a user id', () => {
    const initialState = null;
    const mockAction = {
      type: 'REMOVE_USER'
    };

    const result = userIdReducer(initialState, mockAction);

    expect(result).toEqual(initialState);
  });

  it('should return null as a default state', () => {
    const mockActivity = { type: 'ADD_ZIPCODE' };
    const result = userIdReducer(undefined, mockActivity);

    expect(result).toEqual(null);
  });

});