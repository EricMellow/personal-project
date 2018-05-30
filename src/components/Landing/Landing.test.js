import { Landing } from "./Landing";
import { shallow } from "enzyme";
import React from "react";

describe('Landing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInputChange', () => {
    
    it('should set state with the event info', () => {
      const wrapper = shallow(<Landing />);
      const mockEvent = {
        target: {
          name: 'zip',
          value: 80401,
        },
        preventDefault: jest.fn()
      };

      expect(wrapper.state('zip')).toEqual(undefined)
      wrapper.instance().handleInputChange(mockEvent)
      expect(wrapper.state('zip')).toEqual(80401)
    });
  });
});