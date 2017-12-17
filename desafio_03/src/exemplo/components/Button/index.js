/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import {
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Button = ({ color, children, ...props }) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.buttonContainer,
      styles[`button-color-${color}`],
      props.style,
    ]}
    activeOpacity={0.6}
  >
    <Text style={styles.buttonText}>{ children }</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  style: Text.propTypes.style,
};

Button.defaultProps = {
  color: 'dark',
  style: {},
};

export default Button;

