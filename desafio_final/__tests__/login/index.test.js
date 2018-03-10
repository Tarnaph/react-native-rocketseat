/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import { Text } from 'react-native';
import Btn from '../../src/pages/components/btn';
import Input from '../../src/pages/components/input';
import Notification from '../../src/pages/components/notification';
import Login from '../../src/pages/login';

/* Variaveis */
const mockStore = configureStore([]);

const dispatch = jest.fn();
const loginRequest = jest.fn();

const navigation = {
  dispatch,
};

const initialState = {
  login: ({
    isRegistered: false,
    isAuthorized: false,
  }),
  ux: ({
    loading: false,
  }),
  user: ({
    phone: '',
  }),
  navigation: ({
    dispatch,
  }),
  loginRequest,
};

/* Tests */
describe('Test Notification', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Login navigation={navigation} dispatch={navigation.dispatch} />,
      { context: { store } },
    );
  }

  it('render Notification', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Notification)).toHaveLength(1);
  });

  it('render Text', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Text)).toHaveLength(2);
  });

  it('render Input', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Input)).toHaveLength(2);
  });

  it('render Btn', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Btn)).toHaveLength(1);
  });

});
