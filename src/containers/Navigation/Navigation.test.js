import {
  Navigation,
  AuthNavigation,
  UnauthNavigation,
  mapStateToProps,
  mapDispatchToProps
} from "./Navigation";
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

  describe('AuthNavigation', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<AuthNavigation />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Navigation', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<UnauthNavigation />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {

    it('should map authUser to props', () => {
      const mockState = {
        authUser: true,
        userId: 12345
      };
      const expected = {
        authUser: true
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params on removeAuthenticatedUser', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'REMOVE_USER'
      };
      mappedProps.removeUser();

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch with the correct params on removeUserId', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'REMOVE_USER_ID'
      };

      mappedProps.removeId();

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});