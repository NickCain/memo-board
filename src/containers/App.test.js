import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount, shallow } from 'enzyme';
import React from 'react';
import App from './App.js'

let wrapper;
let shallowWrapper;

const mockStore = configureStore([])({});   // configureStore(middlewares)(initialState)

describe('App - Container', () => {
  describe('App renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Provider store={mockStore}>
          <App />
        </Provider>
      );
      shallowWrapper = shallow(
        <Provider store={mockStore}>
          <App />
        </Provider>
      );
    });

    it('should render the App component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
