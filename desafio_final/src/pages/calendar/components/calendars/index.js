/* Core */
import React, { Component } from 'react';
import moment from 'moment';

/* Presentational */
import { Calendar, LocaleConfig } from 'react-native-calendars';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';
import CalendarActions from 'redux/ducks/calendar';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

class Calendars extends Component {
  /* Intial State */
  state = {
    selected: moment().format('YYYY-MM-DD'),
    marked: this.props.calendar.marked,
    today: moment().format('YYYY-MM-DD'),
  }

  /* Antes de Montar */
  componentWillMount() {
    this.getTodo(
      this.props.user.id,
      this.props.user.token,
      this.state.today,
    );
    this.getMarked(
      this.props.user.id,
      this.props.user.token,
      this.state.selected,
    );
    console.tron.log(this.props);
    // console.tron.error(this.state);
    //this.markedDates();
  }

  componentDidUpdate() {
    // console.tron.log(this.state)
  }

  /* Get Todo by a day */
  getTodo = (id, token, date) => {
    this.props.todoGetDay(id, token, date);
    this.markedDates();
  }

  /* Get Market */
  getMarked = (id, token, selected) => (
    this.props.calendarGetMarked(id, token, selected)
  )

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
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Dom',
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
        onDayPress={(day) => this.getTodo(this.props.user.id, this.props.user.token, day.dateString)}
        monthFormat={'MMMM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
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
  calendarGetMarked: (id, token, selected) => dispatch(CalendarActions.calendarGetMarked(id, token, selected)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Calendars);

