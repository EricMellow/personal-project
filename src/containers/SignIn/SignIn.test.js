import { SignIn, mapDispatchToProps } from "./SignIn";
import { shallow } from "enzyme";
import React from "react";
import { auth } from "../../firebase";


describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInput', () => {

    it('should set the correct key/value pair in state with the incomming event data', () => {
      const wrapper = shallow(<SignIn />);
      const mockEvent = {
        target: {
          name: 'password',
          value: 'trustnoone'
        }
      };
      const initialExpected = {
        email: '',
        password: '',
        error: null
      };
      const finalExpected = {
        email: '',
        password: 'trustnoone',
        error: null
      };

      expect(wrapper.state()).toEqual(initialExpected);
      wrapper.instance().handleInput(mockEvent);
      expect(wrapper.state()).toEqual(finalExpected);
    });
  });

  describe('resetState', () => {

    it('should reset the state to the default settings', () => {
      const wrapper = shallow(<SignIn />);
      const initialState = {
        email: 'test@test.com',
        password: 'password',
        error: null
      };
      wrapper.setState(initialState);
      const expected = {
        email: '',
        password: '',
        error: null
      };

      expect(wrapper.state()).toEqual(initialState);
      wrapper.instance().resetState();
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('storeData', () => {
    let wrapper;
    let mockHistory;
    let mockEvent;
    let mockAuth;
    let mockStoreId;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
      mockHistory = { push: jest.fn() };
      mockAuth = jest.fn();
      mockStoreId = jest.fn();
      wrapper = shallow(<SignIn 
        history={mockHistory}
        storeUserId={mockStoreId}
        authenticate={mockAuth}
      />);
      auth.doSignInWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({user: {uid: 12345}}));
    });

    it('should call doSignInWithEmailAndPassword with the correct arguments', () => {
      wrapper.setState({
        email: 'test@test.com',
        password: 'trustnoone'
      });

      wrapper.instance().storeData(mockEvent);
      expect(auth.doSignInWithEmailAndPassword).toHaveBeenCalledWith('test@test.com', 'trustnoone');
    });

    it('should reset the state to the default parameters', async () => {
      const initialState = {
        email: 'test@test.com',
        password: 'password',
        error: null
      };
      wrapper.setState(initialState);
      const expected = {
        email: '',
        password: '',
        error: null
      };

      expect(wrapper.state()).toEqual(initialState);
      await wrapper.instance().storeData(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });

    // it('should set the error key in state with a value of the error message if there is an error', () => {
    //   auth.doCreateUserWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.reject(new Error({message: 'oops!'})));
    //   const expected = 'oops!';

    //   wrapper.instance().storeData(mockEvent);
    //   expect(wrapper.state('error')).toEqual(expected);

    // });

  });

  describe('return', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SignIn />);
      wrapper.instance().storeData = jest.fn();
      wrapper.instance().handleInput = jest.fn();
    });

    it('should call storeData on submit', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.instance().storeData).toHaveBeenCalled();
    });

    it('should call handleInput on change of the email input', () => {
      wrapper.find('input.email-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });

    it('should call handleInput on change of the password input', () => {
      wrapper.find('input.password-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    
    it('should call dispatch on authenticateUser with the correct arguments', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'AUTHENTICATED_USER'
      };

      mappedProps.authenticate();
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch on AddUserId with the correct arguments', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_USER_ID',
        userId: 'abc123'
      };

      mappedProps.storeUserId('abc123');
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });

    it('should call dispatch on addZipcode with the correct arguments', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_ZIPCODE',
        zipcode: 90210
      };

      mappedProps.storeZipcode(90210);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });
  });

});