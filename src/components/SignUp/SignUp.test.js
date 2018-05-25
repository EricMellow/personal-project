import SignUp from "./SignUp";
import { shallow } from "enzyme";
import React from "react";
import { auth } from "../../firebase";

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

    it('should reset the state to the default settings', () => {
      const wrapper = shallow(<SignUp />);
      const initialState = {
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        confirmPassword: 'password',
        error: null
      };
      wrapper.setState(initialState);
      const expected = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() }
      mockHistory = { push: jest.fn() };
      wrapper = shallow(<SignUp history={mockHistory}/>);
      auth.doCreateUserWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({}));
    });

    it('should call doCreateUserWithEmailAndPassword with the correct arguments', () => {
      wrapper.setState({
        email: 'test@test.com',
        password: 'trustnoone'
      });

      wrapper.instance().storeData(mockEvent);
      expect(auth.doCreateUserWithEmailAndPassword).toHaveBeenCalledWith('test@test.com', 'trustnoone')
    });

    it('should reset the state to the default parameters', async () => {
      const initialState = {
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        confirmPassword: 'password',
        error: null
      };
      wrapper.setState(initialState);
      const expected = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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

  

});