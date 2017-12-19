/* Core */
import React from 'react';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

const button = ({ title, bg }) => (
  <View style={[styles.container, styles[`color-${bg}`]]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default button;
