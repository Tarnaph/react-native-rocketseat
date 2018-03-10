/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import Msg from '../../../src/pages/components/notification/components/msg';
import Notification from '../../../src/pages/components/notification/';

/* Variaveis */
const mockStore = configureStore([]);
const initialState = {
  notification: (
    {
      show: false,
      error: false,
      msg: '',
    }
  ),
};

/* Tests */
describe('Test Notification', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Notification />,
      { context: { store } },
    );
  }

  it('render as expected', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop()).toEqual(store.notification);
    expect(wrapper.find(Msg)).toHaveLength(0);
  });

  it('not render msg', () => {
    const wrapper = createWrapper();
    expect(wrapper.find(Msg)).toHaveLength(0);
  });

  it('render msg', () => {
    store.notification = {
      show: true,
      error: true,
      msg: 'Error Msg',
    };
    const wrapper = createWrapper();
    expect(wrapper.find(Msg)).toBeTruthy();
  });

  // it('func hide called', () => {
  //   const wrapper = createWrapper();
  //   const spy = wrapper.dive().instance().hideMsg;
  //   expect(spy.called).toBe(true);
  // });

});
