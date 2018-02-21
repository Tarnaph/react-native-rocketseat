/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container,
          styles.show,
          this.props.error === true
          ? styles.error
          : styles.success]}
      >
        <Icon
          name={this.props.error ? 'exclamation-triangle' : 'check-circle'}
          size={fonts.regular}
          color={colors.white}
        />
        <Text style={styles.title}>{this.props.msg}</Text>
      </TouchableOpacity>
    );
  }
}
