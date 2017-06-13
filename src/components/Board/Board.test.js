import { mount, shallow } from 'enzyme';
import React from 'react';
import Board from './Board.js'

let wrapper;
let shallowWrapper;

describe('Board - Container', () => {
  describe('Board renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Board />
      );
      shallowWrapper = shallow(
        <Board />
      );
    });

    it('should render the Board component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
