/* Core */
import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';
import CalendarActions from 'redux/ducks/calendar';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

class MiniCalendar extends Component {
  /* Validacoes */
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    calendar: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
    todoGetDay: PropTypes.func.isRequired,
    hideMini: PropTypes.func.isRequired,
  }

  /* Initical state */
  state = { toDay: this.props.calendar.date }

  /* Add Sub Date e atualiza lista */
  newDate = (day) => {
    const newDate = moment(this.state.toDay).add(day, 'days').format('YYYY-MM-DD');
    this.setState({ toDay: newDate });
    this.props.todoGetDay(
      this.props.user.id,
      this.props.user.token,
      newDate,
    );
  }

  /* Formata date para pt-BR */
  formatDateBR = date => (
    moment(date).format('LL')
  )

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerCalendar}>
          <TouchableOpacity id="addDate" style={styles.iconLeft} onPress={() => this.newDate(-1)}>
            <Icon name="angle-left" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.mid}>
            <TouchableOpacity onPress={this.props.hideMini} style={styles.containerTitle}>
              <Text style={styles.title}>{this.formatDateBR(this.state.toDay)}</Text>
              <Icon name="angle-double-down" size={fonts.big} color={colors.green} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity id="subDate" style={styles.iconRight} onPress={() => this.newDate(1)}>
            <Icon name="angle-right" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>
        </View>

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
  hideMini: () => dispatch(CalendarActions.calendarHideMini()),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(MiniCalendar);

