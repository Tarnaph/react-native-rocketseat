import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Header = () => (
  <View style={styles.card}>
    <Text style={styles.title}>GoNative App</Text>
  </View>
);


const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  title: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
  },
});
export default Header;