/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

export default class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View sytle={styles.left}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
        <View sytle={styles.right}>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
      </View>
    );
  }
}
