/* Core */
import React from 'react';
import { shallow } from 'enzyme';

/* Presentational */
import { ActivityIndicator, Text } from 'react-native';
import Btn from '/pages/components/btn';

/* Variaveis */
const title = 'Teste';
const link = () => alert();
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
});
