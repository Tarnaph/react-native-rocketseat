/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

/* Component */
const button = ({ title, bg }) => (
  <View style={[styles.container, styles[`color-${bg}`]]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

/* Validação */
button.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

/* Export */
export default button;
