import { Landing, mapDispatchToProps } from "./Landing";
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

  describe('handleSubmit', () => {
    let wrapper;
    let mockStoreZip;
    let mockEvent;
    let mockHistory

    beforeEach(() => {
      mockStoreZip = jest.fn()
      mockEvent = {preventDefault: jest.fn()}
      mockHistory = {push: jest.fn()}
      wrapper = shallow(<Landing storeZipcode={mockStoreZip} history={mockHistory}/>)
    });

    it('should call storeZipCode with the zip code in state', () => {
      wrapper.setState({zip: 54321})

      wrapper.instance().handleSubmit(mockEvent)

      expect(wrapper.instance().props.storeZipcode).toHaveBeenCalledWith(54321)
    });
    
    it('should call resetState', () => {
      wrapper.instance().resetState = jest.fn()
      wrapper.setState({ zip: 54321 })

      wrapper.instance().handleSubmit(mockEvent)

      expect(wrapper.instance().resetState).toHaveBeenCalled();
    });

    it('should call history.push', () => {
      wrapper.setState({ zip: 54321 })

      wrapper.instance().handleSubmit(mockEvent)

      expect(wrapper.instance().props.history.push).toHaveBeenCalled()
    });
  });

  describe('resetState', () => {
    
    it('should reset the state to the default value', () => {
      const wrapper = shallow(<Landing />)
      wrapper.setState({ zip: 54321 })

      expect(wrapper.state()).toEqual({ zip: 54321 })
      wrapper.instance().resetState()
      expect(wrapper.state()).toEqual({ zip: undefined })
    });
  });
  describe('render', () => {
    
    it('should call handleInputChange onChange of the input', () => {
      const wrapper = shallow(<Landing />)
      wrapper.instance().handleInputChange = jest.fn()

      wrapper.find('.zip').simulate('change')
      expect(wrapper.instance().handleInputChange).toHaveBeenCalled()
    });
  });

  describe('mapDispatchToProps', () => {
    
    it('should map storeZipcode to props', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {
        type: 'ADD_ZIPCODE',
        zipcode: 90210
      };

      mappedProps.storeZipcode(90210);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});