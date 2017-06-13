import { mount, shallow } from 'enzyme';
import React from 'react';
import TopNav from './TopNav.js'

let wrapper;
let shallowWrapper;

describe('TopNav - component', () => {
  describe('TopNav renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <TopNav />
      );
      shallowWrapper = shallow(
        <TopNav />
      );
    });

    it('should render the TopNav component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
