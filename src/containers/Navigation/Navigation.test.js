import Navigation from "./Navigation";
import { shallow } from "enzyme";
import React from "react";

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});