/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = ({ back, title }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => back()}>
      <Icons name="chevron-left" style={styles.icon} />
    </TouchableOpacity>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired,
};

export default Header;
