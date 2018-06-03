import React from "react";
import { CreateActivity } from "./CreateActivity";
import { shallow } from "enzyme";
import { db } from '../../firebase';
import { firebaseKey } from "../../keys";


describe('CreateActivity', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateActivity />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a default state', () => {
    const wrapper = shallow(<CreateActivity />);
    const expected = {
      address: '',
      type: '',
      duration: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  describe('handleInput', () => {

    it('should set the appropriate key in state with the event value', () => {
      const wrapper = shallow(<CreateActivity />);
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'type',
          value: 'frolf'
        }
      };
      const initialState = {
        address: '',
        type: '',
        duration: ''
      };
      const expected = {
        address: '',
        type: 'frolf',
        duration: ''
      };

      expect(wrapper.state()).toEqual(initialState);
      wrapper.instance().handleInput(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('storeActivity', () => {
    let wrapper;
    let mockEvent;

    beforeEach(() => {
      wrapper = shallow(<CreateActivity />);
      mockEvent = {
        preventDefault: jest.fn()
      };
      wrapper.instance().getLocation = jest.fn().mockImplementation(() => {
        return {
          lat: 12345,
          lng: 54321
        };
      });
      wrapper.setState({
        address: '221 B Baker St.',
        type: 'Investigation',
        duration: '16 hours'
      });
      db.doCreateActivity = jest.fn();
    });

    it('should call db.doCreateActivity with the correct arguments', async () => {
      const expectedAddress = '221 B Baker St.';
      const expectedDuration = '16 hours';
      const expectedLat = 38.8372452;
      const expectedLng = -97.617204;
      const expectedType = 'Investigation';

      await wrapper.instance().storeActivity(mockEvent);
      expect(db.doCreateActivity).toHaveBeenCalledWith(expectedAddress, expectedDuration, expectedLat, expectedLng, expectedType);
    });

    it('should reset state to the default settings', async () => {
      const initialState = {
        address: '221 B Baker St.',
        type: 'Investigation',
        duration: '16 hours'
      };
      const expected = {
        address: '',
        type: '',
        duration: ''
      };

      expect(wrapper.state()).toEqual(initialState);
      await wrapper.instance().storeActivity(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('resetInputFields', () => {
    it('should reset state to its default state', () => {
      const wrapper = shallow(<CreateActivity />);
      const initialState = {
        address: '221 B Baker St.',
        type: 'Investigation',
        duration: '16 hours'
      };
      const expected = {
        address: '',
        type: '',
        duration: ''
      };
      wrapper.setState(initialState);

      expect(wrapper.state()).toEqual(initialState);
      wrapper.instance().resetInputFields();
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CreateActivity />)
    });
    
    it('should call storeActivity onSubmit of the form', () => {
      wrapper.instance().storeActivity = jest.fn()

      wrapper.find('.create').simulate('submit')
      expect(wrapper.instance().storeActivity).toHaveBeenCalled()
    });

    it('should call handleInput onChange of the type input', () => {
      wrapper.instance().handleInput = jest.fn()

      wrapper.find('.type-input').simulate('change')
      expect(wrapper.instance().handleInput).toHaveBeenCalled()
    });

    it('should call handleInput onChange of the address input', () => {
      wrapper.instance().handleInput = jest.fn()

      wrapper.find('.address-input').simulate('change')
      expect(wrapper.instance().handleInput).toHaveBeenCalled()
    });

    it('should call handleInput onChange of the duration input', () => {
      wrapper.instance().handleInput = jest.fn()

      wrapper.find('.duration-input').simulate('change')
      expect(wrapper.instance().handleInput).toHaveBeenCalled()
    });
  });

});