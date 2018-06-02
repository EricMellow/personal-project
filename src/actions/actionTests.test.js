import { addActivities } from "./activitiesActions";
import { 
  authenticateUser, 
  removeAuthenticatedUser 
} from "./authenticateUser";
import { addUserId, removeUserId } from "./userIdActions";
import { addZipcode } from "./zipcodeActions";

describe('addActivities', () => {
  
  it('should return an activities action', () => {
    const mockActivities = {
      fake: 'activities'
    }
    const expected = {
      type: 'ADD_ACTIVITIES',
      activities: {
        fake: 'activities'
      }
    }

    const result = addActivities(mockActivities)

    expect(result).toEqual(expected)
  });
});

describe('authenticateUser', () => {

  it('should return an authenticated user action', () => {
    
    const expected = {
      type: 'AUTHENTICATED_USER'
    }

    const result = authenticateUser()

    expect(result).toEqual(expected)
  });
});

describe('removeAuthenticatedUser', () => {

  it('should return a remover user action', () => {
    const expected = {
      type: 'REMOVE_USER'
    }

    const result = removeAuthenticatedUser();

    expect(result).toEqual(expected)
  });
});

describe('addUserId', () => {

  it('should return a user id action', () => {
    const mockId = '007'
    const expected = {
      type: 'ADD_USER_ID',
      userId: '007'
    }

    const result = addUserId(mockId)

    expect(result).toEqual(expected)
  });
});

describe('removeUserId', () => {

  it('should return a remove user id action', () => {
    const expected = {
      type: 'REMOVE_USER_ID'
    }

    const result = removeUserId()

    expect(result).toEqual(expected)
  });
});

describe('addZipcode', () => {

  it('should return a zipcode activity', () => {
    const mockZipcode = 12345
    const expected = {
      type: 'ADD_ZIPCODE',
      zipcode: 12345
    }

    const result = addZipcode(mockZipcode)

    expect(result).toEqual(expected)
  });
});