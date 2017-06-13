import { mount, shallow } from 'enzyme';
import React from 'react';
import Notification from './Notification.js'

let wrapper;
let shallowWrapper;

describe('Notification - notification', () => {
  describe('Notification renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Notification />
      );
      shallowWrapper = shallow(
        <Notification />
      );
    });

    it('should render the Notification component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
