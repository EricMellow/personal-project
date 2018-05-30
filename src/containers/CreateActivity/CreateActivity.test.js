import React from "react";
import { CreateActivity } from "./CreateActivity";
import { shallow } from "enzyme";

describe('CreateActivity', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateActivity />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a default state', () => {
    const wrapper = shallow(<CreateActivity />)
    const expected = {
      address: '',
      type: '',
      duration: ''
    };

    expect(wrapper.state()).toEqual(expected)
  });

  describe('handleInput', () => {
    
    it('should set the appropriate key in state with the event value', () => {
      const wrapper = shallow(<CreateActivity />)
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'type',
          value: 'frolf'
        }
      }
      const initialState = {
        address: '',
        type: '',
        duration: ''
      };
      const expected = {
        address: '',
        type: 'frolf',
        duration: ''
      };

      expect(wrapper.state()).toEqual(initialState)
      wrapper.instance().handleInput(mockEvent)
      expect(wrapper.state()).toEqual(expected)
    });
  });
});