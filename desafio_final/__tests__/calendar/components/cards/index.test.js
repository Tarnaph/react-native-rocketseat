/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import { Text } from 'react-native';
import Cards from '../../../../src/pages/calendar/components/cards';

/* Variaveis */
const mockStore = configureStore([]);

const title = 'title';
const description = 'description';
const time = '11-12';
const todoId = 11;

const initialState = {
  icon: 'facebook',
  user: {
    id: 1,
    token: 'token',
  },
  ux: {
    loadingRemove: false,
  },
  calendar: {
    date: '11-12-28',
  },
};

/* Tests */
describe('Test Btn Adder', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Cards title={title} description={description} time={time} todoId={todoId} />,
      { context: { store } },
    );
  }
  
  it('renders', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Text)).toHaveLength(3);
  });

  it('Cards toBeInstanceOf', () => {
    const wrapper = createWrapper();
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(Cards);
  });

});
