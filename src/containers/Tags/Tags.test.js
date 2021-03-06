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
          value: 'BASEKETBALL'
        }
      };
    });

    it('should set the appropriate key in state with the value of the event', () => {
      const expected = { type: 'BASEKETBALL' };

      expect(wrapper.state()).toEqual({ type: '' });
      wrapper.instance().handleInput(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('render', () => {

    it('should prevent the default action onSubmit', () => {
      const mockEvent = { preventDefault: jest.fn() };
      const wrapper = shallow(<Tags />);

      wrapper.find('.tags-form').simulate('submit', mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });


    it('should call handleInput onCHange of the input', () => {
      const mockEvent = { preventDefault: jest.fn() };
      const wrapper = shallow(<Tags />);
      wrapper.instance().handleInput = jest.fn();

      wrapper.find('.add-type-input').simulate('change');
      expect(wrapper.instance().handleInput).toHaveBeenCalled();
    });

  });

});