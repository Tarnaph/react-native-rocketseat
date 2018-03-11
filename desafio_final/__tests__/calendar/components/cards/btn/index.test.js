/* Core */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

/* Redux */
import TodoActions from 'redux/ducks/todo';

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

const id = 1;
const todoId = 1;
const token = '838383';
const date = '11-12-28';

const todoRemoveSpy = sinon.spy();
const shareSpy = sinon.spy();

const todoRemove = todoRemoveSpy;
const share = shareSpy;

const initialState = {
  todoId,
  title: 'title',
  color: '#1123',
  icon: 'share',
  description,

  user: {
    id,
    token,
  },
  ux: {
    loadingRemove: false,
  },
  calendar: {
    date,
  },
  todoRemove,
  share,
};

/* Tests */
describe('Test Btn Adder', () => {
  const store = mockStore(initialState);
  function createWrapper() {
    return shallow(
      <Btn title={title} color={color} icon={icon} todoId={todoId} description={description} />,
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
    sinon.spy(Share, 'share');
    const wrapper = createWrapper();
    wrapper.dive().instance().share(title, description);
    expect(Share.share.calledOnce).toBe(true);
  });

  it('remove function', () => {
    const wrapper = createWrapper();
    wrapper.dive().setProps({ icon: 'facebook' }).find(TouchableOpacity).simulate('press');
    expect(store.getActions()).toContainEqual(TodoActions.todoRemove(id, todoId, token, date));
    
  });

});
