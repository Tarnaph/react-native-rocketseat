/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import Btn from '../../src/pages/components/btn';
import Input from '../../src/pages/components/input';
import Dashboard from '../../src/pages/dashboard';

/* Variaveis */
const mockStore = configureStore([]);
const name = 'name';
const password = '';
const confirmPassword = '';

function updateUser() { }

const initialState = {
  login: ({
    isRegistered: false,
    isAuthorized: false,
  }),
  user: ({
    id: 1,
    name: 'name',
    token: '######',
  }),
  ux: ({
    loading: false,
  }),
  updateUser,
};

/* Tests */
describe('Test Notification', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Dashboard name={name} password={password} confirmPassword={confirmPassword} />,
      { context: { store } },
    );
  }

  it('render Input', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Input)).toHaveLength(3);
  });

  it('render Btn', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Btn)).toHaveLength(1);
  });
});
