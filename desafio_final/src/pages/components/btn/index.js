/* Core */
import React, { Component } from 'react';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class Btn extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={this.props.link}>
      	<Text style={styles.title}> {this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
