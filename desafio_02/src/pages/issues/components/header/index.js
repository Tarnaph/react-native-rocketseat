import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = ({ back, title }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.iconContainer} onPress={() => back()}>
      <Icon name="chevron-left" style={styles.icon} />
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
