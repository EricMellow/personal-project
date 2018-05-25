import SignUp from "./SignUp";
import { shallow } from "enzyme";
import React from "react";

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
      const wrapper = shallow(<SignUp />)
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
      wrapper.instance().handleInput(mockEvent)
      expect(wrapper.state()).toEqual(finalExpected)
    });
  });
});