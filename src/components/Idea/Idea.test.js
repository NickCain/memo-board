import { mount, shallow } from 'enzyme';
import React from 'react';
import Idea from './Idea.js'

let wrapper;
let shallowWrapper;

describe('Idea - Component', () => {
  describe('Idea renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Idea />
      );
      shallowWrapper = shallow(
        <Idea />
      );
    });

    it('should render the Idea component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
