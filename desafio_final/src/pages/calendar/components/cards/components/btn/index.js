/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Share, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

class Btn extends Component {
  /* Validacoes */
  static propTypes = {
    todoId: PropTypes.number,
    title: PropTypes.string,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string,
    todoRemove: PropTypes.func.isRequired,
    ux: PropTypes.shape({
      loadingRemove: PropTypes.bool.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    calendar: PropTypes.shape({
      date: PropTypes.string,
    }),
  }

  /* Default PropsTypes */
  static defaultProps = {
    calendar: PropTypes.shape({
      date: null,
    }),
    todoId: null,
    title: '',
    description: '',
  }

  /*  Func Share Todo */
  share = (title, description) => (
    Share.share({
      title,
      message: description,
      url: 'www.raphaelmorales.com',
    })
  )

  /* Func Remove Todo */
  remove = (id, todoId, token, date) => (
    this.props.todoRemove(id, todoId, token, date)
  )

  /* Render duh! */
  render() {
    const {
      color,
      icon,
      title,
      description,
      todoId,
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.button,
          styles[color],

        ]}
        onPress={
          icon === 'share'
          ? () => this.share(title, description)
          : () => this.remove(
              this.props.user.id,
              todoId,
              this.props.user.token,
              this.props.calendar.date,
            )
        }
        activeOpacity={0.6}
      >
        {this.props.ux.loadingRemove
          ? <ActivityIndicator size="small" color={colors.white} />
          : <Icon name={icon} size={fonts.small} color={colors.white} />
        }
      </TouchableOpacity>
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
  todoRemove: (
    id,
    todoId,
    token,
    date,
  ) => dispatch(TodoActions.todoRemove(
    id,
    todoId,
    token,
    date,
  )),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Btn);

