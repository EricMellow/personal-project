import { SignUp, mapDispatchToProps } from "./SignUp";
import { shallow } from "enzyme";
import React from "react";
import { auth, db } from "../../firebase";

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInput', () => {

    it('should set the correct key/value pair in state with the incomming event data', () => {
      const wrapper = shallow(<SignUp />);
      const mockEvent = {
        target: {
          name: 'password',
          value: 'trustnoone'
        }
      };
      const initialExpected = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: null
      };
      const finalExpected = {
        username: '',
        email: '',
        password: 'trustnoone',
        confirmPassword: '',
        error: null
      };

      expect(wrapper.state()).toEqual(initialExpected);
      wrapper.instance().handleInput(mockEvent);
      expect(wrapper.state()).toEqual(finalExpected);
    });
  });

  describe('resetState', () => {

    it('should reset the state to the default settings', async () => {
      const wrapper = shallow(<SignUp />);
      const initialState = {
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        confirmPassword: 'password',
        zipcode: 80401,
        error: null
      };
      await wrapper.setState(initialState);
      const expected = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        zipcode: undefined,
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
    let mockStoreUserId;
    let mockAuth;
    let mockStoreUsername;
    let mockStoreZipcode

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
      mockHistory = { push: jest.fn() };
      mockStoreUserId = jest.fn();
      mockStoreUsername = jest.fn();
      mockStoreZipcode = jest.fn()
      mockAuth = jest.fn();
      auth.doCreateUserWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({ user: { uid: 12345 } }));
      db.doCreateUser = jest.fn()

      wrapper = shallow(<SignUp
        history={mockHistory}
        storeUserId={mockStoreUserId}
        authenticate={mockAuth}
        storeUsername={mockStoreUsername}
        storeZipcode={mockStoreZipcode}
      />);
    });

    it('should call doCreateUserWithEmailAndPassword with the correct arguments', () => {
      wrapper.setState({
        email: 'test@test.com',
        password: 'trustnoone'
      });

      wrapper.instance().storeData(mockEvent);
      expect(auth.doCreateUserWithEmailAndPassword).toHaveBeenCalledWith('test@test.com', 'trustnoone');
    });

    it('should call storeUserId with the correct argument', async () => {

      await wrapper.instance().storeData(mockEvent);
      expect(wrapper.instance().props.storeUserId).toHaveBeenCalledWith(12345);
    });

    it('should call authenticate', async () => {

      await wrapper.instance().storeData(mockEvent);
      expect(wrapper.instance().props.authenticate).toHaveBeenCalled();
    });

    it('should call storeZipcode with the correct arguments', async () => {
      wrapper.setState({
        zipcode: 90210
      })
      await wrapper.instance().storeData(mockEvent);
      expect(wrapper.instance().props.storeZipcode).toHaveBeenCalledWith(90210);
    });

    it('should call storeZipcode with the correct arguments', async () => {
      wrapper.setState({
        username: 'Todd'
      })
      await wrapper.instance().storeData(mockEvent);
      expect(wrapper.instance().props.storeUsername).toHaveBeenCalledWith('Todd');
    });

    it('should call resetState', async () => {
      wrapper.instance().resetState = jest.fn()

      await wrapper.instance().storeData(mockEvent);
      expect(wrapper.instance().resetState).toHaveBeenCalled();
    });

    // it('should reset the state to the default parameters', () => {
    //   const initialState = {
    //     username: 'test',
    //     email: 'test@test.com',
    //     password: 'password',
    //     confirmPassword: 'password',
    //     zipcode: '80401',
    //     error: null
    //   };

    //   wrapper.setState(initialState);
    //   const expected = {
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     zipcode: undefined,
    //     error: null
    //   };

    //   expect(wrapper.state()).toEqual(initialState);
    //   wrapper.instance().storeData(mockEvent);
    //   expect(wrapper.state()).toEqual(expected);
    // });

    // it('should set the error key in state with a value of the error message if there is an error', () => {
    //   auth.doCreateUserWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.reject(new Error({message: 'oops!'})));
    //   const expected = 'oops!';

    //   wrapper.instance().storeData(mockEvent);
    //   expect(wrapper.state('error')).toEqual(expected);

    // });

  });

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SignUp />);
      wrapper.instance().storeData = jest.fn();
      wrapper.instance().handleInput = jest.fn();
    });

    it('should call storeData on submit', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.instance().storeData).toHaveBeenCalled();
    });

    it('should call handleInput on change of the username input', () => {
      wrapper.find('input.name-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });

    it('should call handleInput on change of the username input', () => {
      wrapper.find('input.zip-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });

    it('should call handleInput on change of the email input', () => {
      wrapper.find('input.email-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });

    it('should call handleInput on change of the password input', () => {
      wrapper.find('input.password-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });

    it('should call handleInput on change of the confirm password input', () => {
      wrapper.find('input.confirm-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct argument on authenticateUser', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'AUTHENTICATED_USER'
      };

      mappedProps.authenticate();
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch with the correct argument on addZipcode', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_ZIPCODE',
        zipcode: 90210
      };

      mappedProps.storeZipcode(90210);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch with the correct argument on aaddUsername', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_USERNAME',
        username: 'Todd'
      };

      mappedProps.storeUsername('Todd');
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch with the correct argument on addUserId', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_USER_ID',
        userId: '123abc'
      };

      mappedProps.storeUserId('123abc');
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });

});