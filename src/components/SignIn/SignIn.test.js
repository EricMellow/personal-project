import SignUp from "./SignIn";
import { shallow } from "enzyme";
import React from "react";

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});