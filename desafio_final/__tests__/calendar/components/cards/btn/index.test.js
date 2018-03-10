/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

/* Presentational */
import { TouchableOpacity, ActivityIndicator, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Btn from '../../../../../src/pages/calendar/components/cards/components/btn';

/* Variaveis */
const mockStore = configureStore([]);

const title = 'title';
const description = '';
const color = '22##';
const icon = 'share';

const todoRemoveSpy = sinon.spy();
const shareSpy = sinon.spy();

const todoRemove = todoRemoveSpy;
const share = shareSpy;


const initialState = {
  todoId: 1,
  title: 'title',
  color: '#1123',
  icon: 'share',
  description,

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
  todoRemove,
  share,
};

/* Tests */
describe('Test Btn Adder', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Btn title={title} color={color} icon={icon} onPress={share} />,
      { context: { store } },
    );
  }

  it('renders', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(TouchableOpacity)).toHaveLength(1);
  });

  it('test ux.loadingRemove is false', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Icon)).toHaveLength(1);
  });

  it('test ux.loadingRemove is true', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().setProps({ ux: { loadingRemove: true } }).find(ActivityIndicator)).toHaveLength(1);
  });

  
  it('onPress Share function', () => {
    const wrapper = createWrapper();
    wrapper.dive().find('TouchableOpacity').simulate('press');
    expect(TouchableOpacity.calledOnce).toBe(true);
  });

  // it('simulates click events', () => {
  //   const mockCallBack = sinon.spy();
  //   const button = shallow(
  //     <Btn title={title} color={color} icon={icon} onPress={mockCallBack}>Ok!</Btn>,
  //   { context: { store } },
  // );

  //   button.dive().find('TouchableOpacity').simulate('click');
  //   expect(mockCallBack.calledOnce).toBe(false);
  // });

});
