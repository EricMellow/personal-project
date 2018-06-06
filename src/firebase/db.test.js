import {
  doCreateUser,
  doCreateActivity
} from "./db";
import { db } from "./firebase";

jest.mock('firebase', () => ({
  auth: jest.fn().mockImplementation(() => ({
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn()
  })),
  apps: [{}],
  database: jest.fn().mockImplementation(() => ({
    ref: jest.fn().mockImplementation(() => ({
        push: jest.fn(),
        set: jest.fn()
      }
    ))
  })),
}));

describe('doCreateUser', () => {

  it('should call db.ref', () => {
    const mockEmail = 'test@test.com';
    const mockId = 12345;
    const mockUsername = 'Test';
    const mockZip = 90210

    doCreateUser(mockId, mockUsername, mockEmail, mockZip);
    expect(db.ref).toHaveBeenCalled();
  });
});

describe('doCreateActivity', () => {

  it('should call db.ref', () => {
    const mockAddress = '924 S 11th Street, Lincoln, NE';
    const mockDuration = 1;
    const mockLat = -35.987;
    const mockLng = 75.897;
    const mockType = 'Coding';
    const mockTime = 78324573;

    doCreateActivity(mockAddress, mockDuration, mockLat, mockLng, mockType, mockTime);
    expect(db.ref).toHaveBeenCalled();
  });
});