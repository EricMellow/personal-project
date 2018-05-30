import React from "react";
import { shallow } from "enzyme";
import { MapContainer } from "./MapContainer";

describe('MapContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MapContainer />)
    expect(wrapper).toMatchSnapshot();
  });
});