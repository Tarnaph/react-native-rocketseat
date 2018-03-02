/* Core */
import React from 'react';
import { shallow } from 'enzyme';

/* Presentational */
import { ActivityIndicator, Text } from 'react-native';
import Msg from '/pages/components/notification/components/msg';

/* Variaveis */
const error = true;
const msg = 'Error Msg'

/* Tests */
describe('Teste da msg do erro', () => {
  it('render text', () => {
    const wrapper = shallow(<Msg error={error} msg={msg} />);
    expect(wrapper.find(Text).children().text()).toEqual('Error Msg');
  });

  // it('render ActivityIndicator', () => {
  //   const wrapper = shallow(<Btn title={title} link={link} loading />);
  //   expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  // });
});
