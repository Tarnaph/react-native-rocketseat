/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

/* Presentational */
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Btn from '../../../src/pages/components/btn';

/* Variaveis */
const title = 'Teste';
const link = () => ('Test press');
const loading = false;

/* Tests */
describe('Test Btn', () => {
  it('render text', () => {
    const wrapper = shallow(<Btn title={title} link={link} loading={loading} />);
    expect(wrapper.find(Text).children().text()).toEqual('Teste');
  });

  it('render ActivityIndicator', () => {
    const wrapper = shallow(<Btn title={title} link={link} loading />);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  });

  it('simular press', () => {
    const goToSpy = sinon.spy();
    const wrapper = shallow(<Btn title={title} link={goToSpy} loading />);
    wrapper.find(TouchableOpacity).simulate('press');
    expect(goToSpy.calledOnce).toBe(true);
  });
});
