/* Core */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';
import Btn from '../../../../src/pages/components/btn';
import Input from '../../../../src/pages/components/input';
import Datepicker from '../../../../src/pages/components/datepicker';
import Modal from '../../../../src/pages/calendar/components/adder';

/* Variaveis */
const mockStore = configureStore([]);

const todoRequest = jest.fn();
const todoHideModal = jest.fn();

const initialState = {
  user: {
    id: 1,
    token: 'token',
    phone: '110022',
  },
  ux: {
    loading: false,
  },
  calendar: {
    date: '11-12-28',
  },
  todo: {
    modal: false,
  },
  todoRequest,
  todoHideModal,
};

/* Tests */
describe('Test Modal Adder', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Modal />,
      { context: { store } },
    );
  }

  it('renders', () => {
    const wrapper = createWrapper();
    expect(wrapper.dive().find(Text)).toHaveLength(2);
    expect(wrapper.dive().find(Btn)).toHaveLength(1);
    expect(wrapper.dive().find(Input)).toHaveLength(2);
    expect(wrapper.dive().find(Datepicker)).toHaveLength(1);
    expect(wrapper.dive().find(TouchableOpacity)).toHaveLength(1);
  });

  // it('simulates click events', () => {
  //   const wrapper = createWrapper();
  //   wrapper.dive().find('Btn').simulate('click');
  //   console.log(todoRequest);
  //   expect(todoRequest.calledOnce).toBe(true);
  // });

  // it('simular press TouchableOpacity', () => {
  //   const goToSpy = sinon.spy();
  //   const wrapper = createWrapper();
  //   wrapper.dive().find(TouchableOpacity).simulate('press');
  //   expect(goToSpy.calledOnce).toBe(true);
  // });

  // it('simular press Btn', () => {
  //   const goToSpy = sinon.spy();
  //   const wrapper = createWrapperBtn();
  //   wrapper.dive().find(<Btn link={goToSpy} />).simulate('press');
  //   expect(goToSpy.calledOnce).toBe(true);
  // });

});
