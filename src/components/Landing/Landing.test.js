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
});