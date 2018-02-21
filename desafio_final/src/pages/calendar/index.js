/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';
import moment from 'moment';

/* Presentational */
import { View, Text, ScrollView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';

/* Components */
import Cards from './components/cards';
import MyCalendar from './components/calendars';
import Adder from './components/adder';


/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

class Calendar extends Component {
  state = { refreshing: false };

  componentWillMount(){
    console.tron.log(this.props);
    //console.tron.log(this.state);
    //this.getAllTodobyDay();
  }

  refreshTodo = () => (
    this.props.todoGetDay(this.props.user.id, this.props.user.token, this.props.calendar.date)
  );

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
            ? <ActivityIndicator size="small" color={colors.white} style={styles.loading}/>
            : <FlatList
              style={styles.list}
              data={this.props.todo.list}
              keyExtractor={todo => todo.id}
              renderItem={(todo) =>
                <Cards
                  title={todo.item.title}
                  description={todo.item.text}
                  time={VMasker.toPattern(todo.item.time, '99:99')}
                />}
              ListEmptyComponent={() => <Text>Nada Encontrado</Text>}
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
