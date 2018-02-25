/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ScrollView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Components */
import Cards from 'pages/calendar/components/cards';
import MyCalendar from 'pages/calendar/components/calendars';
import Adder from 'pages/calendar/components/adder';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

class Calendar extends Component {
  /* Validacoes */
  static propTypes = {
    ux: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    calendar: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
    todo: PropTypes.shape({
      list: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
    todoGetDay: PropTypes.func.isRequired,
  }

  /* Initial State */
  state = { refreshing: false };

  /* Refresh lista de todo */
  refreshTodo = () => (
    this.props.todoGetDay(this.props.user.id, this.props.user.token, this.props.calendar.date)
  );

  /* Render Msg de Lista Vazia */
  emptyMensagem = () => (
    <View style={styles.containerEmpty}>
      <Icon
        name="calendar"
        size={fonts.bigger}
        color={colors.purpleDarker}
      />
      <Text style={styles.titleEmpty}>Nada foi encontrado</Text>
    </View>
  )

  /* Render duh! */
  render() {
    return (
      <View style={styles.container}>
        <Adder />
        <View style={styles.top}>
          <MyCalendar />
        </View>
        <ScrollView
          style={styles.medium}
          refreshControl={
            <RefreshControl
              title="Atualizando"
              color={colors.white}
              progressBackgroundColor={colors.green}
              refreshing={this.state.refreshing}
              onRefresh={() => this.refreshTodo()}
            />
          }
        >
          { this.props.ux.loading
            ? <ActivityIndicator size="small" color={colors.purpleDarker} style={styles.loading} />
            : <FlatList
              style={styles.list}
              data={this.props.todo.list}
              ListEmptyComponent={this.emptyMensagem}
              keyExtractor={todo => todo.id}
              renderItem={todo => (
                <Cards
                  todoId={todo.item.id}
                  title={todo.item.title}
                  description={todo.item.text}
                  time={VMasker.toPattern(todo.item.time, '99:99')}
                />)}
            />
          }
        </ScrollView>
      </View>
    );
  }
}


/* Pega o global state para o props */
const mapStateToProps = state => ({
  user: state.user,
  ux: state.ux,
  login: state.login,
  notification: state.notification,
  todo: state.todo,
  calendar: state.calendar,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  todoGetDay: (id, token, date) => dispatch(TodoActions.todoGetDay(id, token, date)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
