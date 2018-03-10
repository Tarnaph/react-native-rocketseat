/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { Modal, TouchableOpacity, View, Text, Keyboard } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';
import Datepicker from 'pages/components/datepicker';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import styles from './styles';

class Adder extends Component {
  /* Validacoes */
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      token: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    ux: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    calendar: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
    todo: PropTypes.shape({
      modal: PropTypes.bool.isRequired,
    }).isRequired,
    todoRequest: PropTypes.func.isRequired,
    todoHideModal: PropTypes.func.isRequired,
  }

  /* Initial State */
  state = { dateTime: '', title: '', text: '' };

  /* Antes de Montar */
  // componentWillMount() { console.tron.log(this.props); }

  /* Cria um Todo */
  createTodo = () => {
    Keyboard.dismiss();
    this.props.todoRequest(
      this.props.user.id,
      this.props.user.token,
      this.state.dateTime,
      this.state.title,
      this.state.text,
      this.props.calendar.date,
    );
    this.setState({ dateTime: '', title: '', text: '' });
  }

  /* Render duh! */
  render() {
    return (
      <Modal
        transparent
        visible={this.props.todo.modal}
        animationType="fade"
        onRequestClose={this.props.todoHideModal}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.header}>
              <Text style={styles.title}>Criar Evento</Text>
            </View>
            <View>
              <Datepicker
                title="Selecione data e horário"
                icon="calendar"
                color="gray"
                date={this.state.dateTime}
                onDateChange={(dateTime) => { this.setState({ dateTime }); }}
              />
              <Input
                title="Qual nome do evento ?"
                icon="comment"
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                keyboardType="default"
                color="gray"
              />
              <Input
                title="Onde Ocorrerá ?"
                icon="comments"
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                keyboardType="default"
                color="gray"
              />
              <Btn
                title="Criar evento"
                link={this.createTodo}
                loading={this.props.ux.loading}
              />
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity activeOpacity={0.7} onPress={this.props.todoHideModal}>
                <Text style={styles.backTitle}> Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  user: state.user,
  ux: state.ux,
  todo: state.todo,
  login: state.login,
  calendar: state.calendar,
  notification: state.notification,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  todoHideModal: () => dispatch(TodoActions.todoHideModal()),
  todoRequest: (id, token, dateTime, title, text, date) =>
    dispatch(TodoActions.todoRequest(id, token, dateTime, title, text, date)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Adder);

