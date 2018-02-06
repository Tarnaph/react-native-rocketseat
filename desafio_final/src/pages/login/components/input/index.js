/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { fonts, colors } from 'styles';
import styles from './styles';


export default class index extends Component {
  render() {
    return (
      <View style={styles.containerInput}>
        <TextInput
          style={styles.celInput}
          placeholder={this.props.title}
          placeholderTextColor={ colors.light }
          underlineColorAndroid={'transparent'}
        />
        <Icon name={this.props.icon} size={fonts.big} style={styles.phoneIcon} />
      </View>
    );
  }
}
