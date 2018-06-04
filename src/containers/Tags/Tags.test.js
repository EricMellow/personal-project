import React from "react";
import { shallow } from "enzyme";
import { Tags } from "./Tags";

describe('Tags', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tags />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInput', () => {
    let wrapper;
    let mockEvent;

    beforeEach(() => {
      wrapper = shallow(<Tags />);
      mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'type',
          value: 'Baseketball'
        }
      };
    });

    it('should set the appropriate key in state with the value of the event', () => {
      const expected = { type: 'Baseketball' };

      expect(wrapper.state()).toEqual({ type: '' });
      wrapper.instance().handleInput(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('render', () => {
    
    it('should call handleInput onChange of the input field', () => {
      const wrapper = shallow(<Tags />)
      wrapper.instance().handleInput = jest.fn()

      wrapper.find('.type-input').simulate('change')
      expect(wrapper.instance().handleInput).toHaveBeenCalled()
    });
  });

});