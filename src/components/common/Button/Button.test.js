import { mount, shallow } from 'enzyme';
import React from 'react';
import Button from './Button.js'

let wrapper;
let shallowWrapper;

const mockData = {
  handleOnClick: jest.fn()
};

describe('Button - Component', () => {
  describe('Button renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Button text="Test" onClick={mockData.handleOnClick}/>
      );
      shallowWrapper = shallow(
        <Button text="Test" onClick={mockData.handleOnClick}/>
      );
    });

    it('should render the Button component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });

    it('should render text passed as a prop', () => {
      expect(wrapper.text()).toContain('Test');
    });

    it('should fire the cancel function when clicked to remove a meal for All passengers', () => {
      wrapper.find('.Button').simulate('click');
      expect(mockData.handleOnClick).toHaveBeenCalled();
    });
  });
});
