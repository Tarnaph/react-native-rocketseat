/* Core */
import React from 'react';
import { shallow } from 'enzyme';

/* Presentational */
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Msg from '../../../../src/pages/components/notification/components/msg';

/* Variaveis */
const error = true;
const errorFalse = false;
const msg = 'Error Msg';

/* Tests */
describe('Teste da msg do erro', () => {
  it('render text', () => {
    const wrapper = shallow(<Msg error={error} msg={msg} />);
    expect(wrapper.find(Text).children().text()).toEqual('Error Msg');
  });

  it('Testar icon error true', () => {
    const wrapper = shallow(<Msg error={error} msg={msg} />);
    expect(wrapper.find(Icon).prop('name')).toEqual('exclamation-triangle');
  });

  it('Testar icon error false', () => {
    const wrapper = shallow(<Msg error={errorFalse} msg={msg} />);
    expect(wrapper.find(Icon).prop('name')).toEqual('check-circle');
  });

});
