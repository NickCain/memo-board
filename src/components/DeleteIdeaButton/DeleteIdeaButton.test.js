import { mount, shallow } from 'enzyme';
import React from 'react';
import DeleteIdeaButton from './DeleteIdeaButton.js'

let wrapper;
let shallowWrapper;

describe('DeleteIdeaButton - component', () => {
  describe('DeleteIdeaButton renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <DeleteIdeaButton />
      );
      shallowWrapper = shallow(
        <DeleteIdeaButton />
      );
    });

    it('should render the DeleteIdeaButton component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
