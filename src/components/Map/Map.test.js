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

  describe('loadMap', () => {
    let wrapper;

    beforeEach(() => {
      const mockGoogle = {
        maps: {
          Map: jest.fn(),
          Marker: jest.fn(),
          InfoWindow: jest.fn()
        }
      };
      wrapper = shallow(<Map google={mockGoogle}/>);
    });

    it('should create a new Map with the correct arguments', () => {
      global.document.addListener = jest.fn();
      wrapper.instance().loadMap();
      const result = wrapper.instance().props.google.maps.Map;
      expect(result).toHaveBeenCalledWith('map', {});
    });
  });
});