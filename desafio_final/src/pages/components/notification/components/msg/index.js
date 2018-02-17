/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';

/* Styles */
import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, styles.show]}>
        <Text style={styles.title}>{this.props.msg}</Text>
      </TouchableOpacity>
    );
  }
}
