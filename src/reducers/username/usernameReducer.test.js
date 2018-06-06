import usernameReducer from "./usernameReducer";

describe('usernameReducer', () => {

  it('should return a username when passed an ADD_USERNAME action', () => {
    const initialState = '';
    const mockAction = {
      type: 'ADD_USERNAME',
      username: 'Todd'
    };

    const result = usernameReducer(initialState, mockAction);

    expect(result).toEqual('Todd');
  });

  it('should return an empty string when passed a REMOVE_USERNAME action', () => {
    const initialState = 'Todd'
    const mockAction = {
      type: 'REMOVE_USERNAME',
    };

    const result = usernameReducer(initialState, mockAction);

    expect(result).toEqual('');
  });

  it('should return the initialState when passed an action not related to adding a username', () => {
    const initialState = 'Brett Bretterson';
    const mockAction = {
      type: 'ADD_USER_ID'
    };

    const result = usernameReducer(initialState, mockAction);

    expect(result).toEqual(initialState);
  });

  it('should return an empty string as a default state', () => {
    const mockActivity = { type: 'REMOVE_ZIPCODE' };
    const result = usernameReducer(undefined, mockActivity);

    expect(result).toEqual('');
  });

});