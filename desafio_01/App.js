import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Posts from './src/components/Posts';
import Header from './src/components/Header';
import './config/ReactotronConfig';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView >
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
  },
});
