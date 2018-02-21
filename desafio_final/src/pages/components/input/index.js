/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { fonts, colors } from 'styles';
import styles from './styles';

/* Const Input */
const Input = ({
  color, title, onChangeText, value, keyboardType, secureTextEntry, icon
}) => (
  <View style={styles.containerInput}>
    <TextInput
      style={[styles.celInput,styles[`${color}`]]}
      placeholder={title}
      placeholderTextColor={color === 'gray' ? colors.dark : colors.light}
      underlineColorAndroid={'transparent'}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={!!secureTextEntry && true}
    />
    <Icon
      name={icon}
      size={fonts.big}
      style={[styles.phoneIcon, styles[`${color}`]]}
    />
  </View>
);

/* PropTypes */
Input.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  icon: PropTypes.string.isRequired,
};

/* DefaultProps */
Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
