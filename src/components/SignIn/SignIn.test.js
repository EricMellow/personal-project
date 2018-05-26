import SignIn from "./SignIn";
import { shallow } from "enzyme";
import React from "react";

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


});