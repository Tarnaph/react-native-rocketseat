/* Core */
import React from 'react';
import { shallow } from 'enzyme';

/* Presentational */
import Icon from 'react-native-vector-icons/FontAwesome';
import Datepicker from '../../../src/pages/components/datepicker';

/* Variaveis */
const color = '';
const date = '';
const onDateChange = () => ('Test press');
const title = '';
const icon = 'facebook';

/* Tests */
describe('Test Input', () => {
  it('render text', () => {
    const wrapper = shallow(<Datepicker
      color={color}
      date={date}
      onDateChange={onDateChange}
      title={title}
      icon={icon}
    />);
    expect(wrapper.find(Icon).prop('name')).toEqual('facebook');
  });
});
