import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Posts = () => (
  <View style={styles.card}>
    <View>
      <Text style={styles.title} >Aprendendo React Native</Text>
    </View>
    <View>
      <Text style={styles.autor}>Raphael Morales</Text>
    </View>
    <View style={styles.hr}>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla faucibus massa, a varius amet.In React Native flex does not work the same way that it does in CSS. flex is a number rather than a string, and it works according to the css-layout library at</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
    padding: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#DA6C6C',
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  title: {
    color: '#333333',
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  autor: {
    color: '#999999',
  },
  hr: {
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 10,
  },
  description: {
    color: '#666666',
    marginTop: 10,
    lineHeight: 19,
  },
});
export default Posts;