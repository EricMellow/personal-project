import activitiesReducer from "./activitiesReducer";

describe('activitiesReducer', () => {
  let mockActivity;
  let mockState;

  beforeEach(() => {
    mockActivity = {
      type: 'ADD_ACTIVITIES',
      activities: {fake: 'activities'}
    }
    mockState = {}
  });

  it('should return activities when given an action with the type of ADD_ACTIVITIES', () => {
    const expected = {fake: 'activities'}
    const result = activitiesReducer(mockState, mockActivity)

    expect(result).toEqual(expected)
  });

  it('should return the state when given an action with a type that is not ADD_ACTIVITIES', () => {
    const mockState = {fake: 'state'}
    const mockActivity = {type: 'REMOVE_USER'}
    const result = activitiesReducer(mockState, mockActivity)

    expect(result).toEqual(mockState)
  });
});