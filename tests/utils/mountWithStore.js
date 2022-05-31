import { h } from 'preact';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

export const mountWithStore = (
  component,
  mockState,
  mockDispatch = jest.fn()
) => {
  const mockStore = configureStore([]);

  const store = mockStore(mockState);
  store.dispatch = mockDispatch;

  return mount(<Provider store={store}>{component}</Provider>);
};
