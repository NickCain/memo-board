import { mount, shallow } from 'enzyme';
import React from 'react';
import Input from './Input.js'

let wrapper;
let shallowWrapper;

describe('Input - component', () => {
  describe('Input renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Input />
      );
      shallowWrapper = shallow(
        <Input />
      );
    });

    it('should render the Input component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
