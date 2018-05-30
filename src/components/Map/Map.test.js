import React from "react";
import { shallow } from "enzyme";
import Map from "./Map";

describe('Map', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Map />);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('componentDidMount', () => {
    
    it('should call loadMap', () => {
      const wrapper = shallow(<Map />);
      wrapper.instance().loadMap = jest.fn();

      wrapper.instance().componentDidMount();

      expect(wrapper.instance().loadMap).toHaveBeenCalled();
    });
  });


});