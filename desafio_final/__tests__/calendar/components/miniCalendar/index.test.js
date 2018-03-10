/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MiniCalendar from '../../../../src/pages/calendar/components/miniCalendar';

/* Variaveis */
const mockStore = configureStore([]);

function todoGetDay() { }
function hideMini() { }

const initialState = {
  user: {
    id: 1,
    token: 'token',
  },
  ux: {
    loading: false,
  },
  calendar: {
    date: '',
  },
  todo: {
    modal: false,
  },
  todoGetDay,
  hideMini,
};

/* Tests */
describe('Test Modal Adder', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <MiniCalendar />,
      { context: { store } },
    );
  }

  it('renders', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Text)).toHaveLength(1);
    expect(wrapper.dive().find(Icon)).toHaveLength(3);
    expect(wrapper.dive().find(TouchableOpacity)).toHaveLength(3);
  });

});
