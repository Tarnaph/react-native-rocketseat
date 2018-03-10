/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import Calendars from '../../../../src/pages/calendar/components/calendars';

/* Variaveis */
const mockStore = configureStore([]);

function todoGetDay() { }

const initialState = {
  user: {
    id: 1,
    token: 'token',
  },
  ux: {
    loading: false,
  },
  calendar: {
    date: '11-12-28',
    marked: {},
  },
  todo: {
    modal: false,
  },
  todoGetDay,
};

/* Tests */
describe('Test Modal Adder', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Calendars />,
      { context: { store } },
    );
  }
  
  it('renders', () => {
    const wrapper = createWrapper();
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(Calendars);
  });
  
});
