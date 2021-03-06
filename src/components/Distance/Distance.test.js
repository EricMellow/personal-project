import Distance from "./Distance";
import { shallow } from "enzyme";
import React from "react";

describe('Distance', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Distance />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});