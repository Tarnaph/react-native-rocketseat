/* Core */
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

/* Presentational */
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

class Calendars extends Component {
  /* Validacoes */
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    calendar: PropTypes.shape({
      date: PropTypes.string,
      marked: PropTypes.objectOf(PropTypes.shape),
    }),
    todoGetDay: PropTypes.func.isRequired,
  }

  /* Default PropsTypes */
  static defaultProps = {
    calendar: PropTypes.shape({
      date: null,
      marked: [],
    }),
  }

  /* Intial State */
  state = { today: moment().format('YYYY-MM-DD') }

  /* Antes de Montar */
  componentWillMount() {
    if (this.props.calendar.date !== '') {
      this.setState({ today: this.props.calendar.date });
    }
  }

  /* Depois de montar */
  componentDidMount() {
    this.getTodo(
      this.props.user.id,
      this.props.user.token,
      this.state.today,
    );
  }

  /* Pega Todo do dia */
  getTodo = (id, token, date) => {
    this.props.todoGetDay(id, token, date);
  }

  /* Render duh! */
  render() {
    LocaleConfig.locales['bra'] = {
      monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
      ],
      monthNamesShort: [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dec',
      ],
      dayNames: [
        'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',
      ],
      dayNamesShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab',
      ],
    };

    LocaleConfig.defaultLocale = 'bra';
    return (
      <Calendar
        style={styles.container}
        theme={{
          calendarBackground: colors.purpleDark,
          textSectionTitleColor: colors.white,
          selectedDayBackgroundColor: colors.green,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.green,
          dayTextColor: colors.white,
          textDisabledColor: colors.purple,
          dotColor: colors.green,
          selectedDotColor: colors.green,
          arrowColor: colors.white,
          monthTextColor: colors.white,
        }}
        markedDates={this.props.calendar.marked}
        onDayPress={day => this.getTodo(this.props.user.id, this.props.user.token, day.dateString)}
        monthFormat="MMMM"
        onMonthChange={month => console.log('month changed', month)}
        hideArrows={false}
        hideExtraDays={false}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
      />
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
export default connect(mapStateToProps, mapDispatchToProps)(Calendars);

