/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

/* Const */
const Msg = ({ error, msg }) => (
  <TouchableOpacity
    style={[styles.container,
      styles.show,
      error === true
      ? styles.error
      : styles.success]}
  >
    <Icon
      name={error ? 'exclamation-triangle' : 'check-circle'}
      size={fonts.regular}
      color={colors.white}
    />
    <Text style={styles.title}>{msg}</Text>
  </TouchableOpacity>
);

/* PropTypes */
Msg.propTypes = {
  error: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Msg;

