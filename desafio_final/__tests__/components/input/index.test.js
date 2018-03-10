/* Core */
import React from 'react';
import { shallow } from 'enzyme';

/* Presentational */
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../../src/pages/components/input';

/* Variaveis */
const color = '';
const title = '';
const onChangeText = () => ('Test press');
const value = '';
const keyboardType = 'default';
const secureTextEntry = true;
const icon = 'facebook';

/* Tests */
describe('Test Input', () => {
  it('render text', () => {
    const wrapper = shallow(<Input
      color={color}
      title={title}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      icon={icon}
    />);
    expect(wrapper.find(Icon).prop('name')).toEqual('facebook');
  });
});
