import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut
} from "./auth";
import { auth } from "./firebase";

jest.mock('firebase', () => ({
  auth: jest.fn().mockImplementation(() => ({
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn()
  })),
  apps: [{}],
  database: jest.fn()
}));

describe('doCreateUserWithEmailAndPassword', () => {

  it('should call auth.createUserWithEmailAndPassword with the correct arguments', () => {
    const mockEmail = 'test@test.com';
    const mockPassword = 'password';

    doCreateUserWithEmailAndPassword(mockEmail, mockPassword);
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(mockEmail, mockPassword);
  });
});

describe('doSignInWithEmailAndPassword', () => {

  it('should call auth.signInWithEmailAndPassword with the correct arguments', () => {
    const mockEmail = 'test@test.com';
    const mockPassword = 'password';

    doSignInWithEmailAndPassword(mockEmail, mockPassword);
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(mockEmail, mockPassword);
  });
});

describe('doSignOut', () => {

  it('should call auth.signOut', () => {

    doSignOut();
    expect(auth.signOut).toHaveBeenCalled();
  });
});