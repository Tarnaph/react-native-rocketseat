/* Core */
import React, { Component } from 'react';
import moment from 'moment';

/* Presentational */
import { View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import { general, colors, fonts, metrics } from 'styles';
import styles from './styles';

class Calendars extends Component {
  state = {
    selected: '',
    today: moment().format('YYYY-MM-DD'),
  }

  componentWillMount(){
    // console.tron.log(this.props);
    // console.tron.log(this.state.today);
    this.getTodo(
      this.props.user.id,
      this.props.user.token,
      this.state.today,
    );
  }

  getTodo = (id, token, date) => {
    this.props.todoGetDay(id, token, date);
    this.setState({ selected: date });
  }

  render() {

    LocaleConfig.locales['bra'] = {
      monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro',
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
        // Theme
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
          // textDayFontFamily: 'monospace',
          // textMonthFontFamily: 'monospace',
          // textDayHeaderFontFamily: 'monospace',
          textDayFontSize: 14,
          textMonthFontSize: 14,
          textDayHeaderFontSize: 14,
        }}
        // Maker
        markedDates={{[this.state.selected]: {selected: true, marked: false, dotColor: colors.purpleDarker, disableTouchEvent: true, selectedColor: colors.green}}}
        // Initially visible month. Default = Date()
        // current={'2018-02-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={'201-01-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2018-05-30'}
        // Handler which gets executed on day press. Default = undefined
        // onDayPress={(day) => this.setState({ selected: day.dateString }) }
        onDayPress={(day) => this.getTodo(this.props.user.id, this.props.user.token, day.dateString)}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
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
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  todoGetDay: (id, token, date) => dispatch(TodoActions.todoGetDay(id, token, date)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Calendars);

