import { mount, shallow } from 'enzyme';
import React from 'react';
import TextArea from './TextArea.js'

let wrapper;
let shallowWrapper;

describe('TextArea - component', () => {
  describe('TextArea renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <TextArea />
      );
      shallowWrapper = shallow(
        <TextArea />
      );
    });

    it('should render the TextArea component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
