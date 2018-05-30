import React from "react";
import { CreateActivity } from "./CreateActivity";
import { shallow } from "enzyme";

describe('CreateActivity', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateActivity />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a default state', () => {
    const wrapper = shallow(<CreateActivity />)
    const expected = {
      address: '',
      type: '',
      duration: ''
    };

    expect(wrapper.state()).toEqual(expected)
  });
});