/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Btn from 'pages/calendar/components/cards/components/btn';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

export default class Cards extends Component {
  /* Validacoes */
  static propTypes = {
    todoId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }

  /* Share Btn */
  btnShare = () => ([{
    component: <Btn
      color="share"
      icon="share"
      title={this.props.title}
      description={this.props.description}
    />,
    backgroundColor: colors.transparent,
  }])

  /* Remove Btn */
  btnRemove = () => ([{
    component: <Btn
      color="remove"
      icon="times"
      todoId={this.props.todoId}
    />,
    backgroundColor: colors.transparent,
  }])

  /* render duh! */
  render() {
    return (
      <Swipeout
        style={styles.swipeout}
        left={this.btnShare()}
        right={this.btnRemove()}
        buttonWidth={55}
        sensitivity={10}
        autoClose
      >
        <View style={styles.eventContainer}>
          <View style={styles.eventText}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
      </Swipeout>
    );
  }
}
