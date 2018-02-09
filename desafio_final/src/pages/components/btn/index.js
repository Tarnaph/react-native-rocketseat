/* Core */
import React, { Component } from 'react';

/* Presentational */
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

/* Styles */
import styles from './styles';

export default class Btn extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={this.props.link}>
        {	this.props.loading
          ? <ActivityIndicator size="small" color="#00ff00" />
          : <Text style={styles.title}>{this.props.title}</Text>
        }
      </TouchableOpacity>
    );
  }
}
