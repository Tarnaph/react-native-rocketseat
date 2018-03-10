/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import { Text } from 'react-native';
import Btn from '../../src/pages/components/btn';
import Input from '../../src/pages/components/input';
import Notification from '../../src/pages/components/notification';
import Identification from '../../src/pages/identification';

/* Variaveis */
const mockStore = configureStore([]);

const dispatch = jest.fn();
const navigate = jest.fn();
const checkPhone = jest.fn();

const navigation = {
  dispatch,
  navigate,
};

const initialState = {
  login: ({
    isRegistered: false,
    isAuthorized: false,
  }),
  ux: ({
    loading: false,
  }),
  navigation: ({
    dispatch,
  }),
  checkPhone,
};

/* Tests */
describe('Test Notification', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Identification navigation={navigation} dispatch={navigation.dispatch} />,
      { context: { store } },
    );
  }

  it('render Notification', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Notification)).toHaveLength(1);
  });

  it('render Text', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Text)).toHaveLength(1);
  });

  it('render Text', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Input)).toHaveLength(1);
  });

  it('render Text', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Btn)).toHaveLength(1);
  });

});
