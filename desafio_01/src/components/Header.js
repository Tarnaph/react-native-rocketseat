import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/header';

const Header = () => (
  <View style={styles.card}>
    <Text style={styles.title}>GoNative App</Text>
  </View>
);

export default Header;
