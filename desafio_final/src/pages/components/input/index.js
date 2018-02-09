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
          style={[styles.celInput,styles[`${this.props.color}`]]}
          placeholder={this.props.title}
          placeholderTextColor={this.props.color === 'gray' ? colors.dark : colors.light}
          underlineColorAndroid={'transparent'}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          keyboardType={this.props.keyboardType}
          secureTextEntry={!!this.props.secureTextEntry && true}
        />
        <Icon
          name={this.props.icon}
          size={fonts.big}
          style={[styles.phoneIcon, styles[`${this.props.color}`]]}
        />
      </View>
    );
  }
}
