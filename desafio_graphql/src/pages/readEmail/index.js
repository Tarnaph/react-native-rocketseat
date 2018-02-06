/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, ScrollView } from 'react-native';
import moment from 'moment';

import styles from './styles';

export default class readEmail extends Component {
  componentWillMount() {
    // console.tron.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
          <View style={styles.containerTop}>
            <Text style={styles.title}>{this.props.navigation.state.params.data.subject}</Text>
            <Text style={styles.date}>
              {moment(this.props.navigation.state.params.data.createdAt).format('DD/MM')}
            </Text>
          </View>
          <View style={styles.containerBottom}>
            <Text style={styles.text}>{this.props.navigation.state.params.data.text}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}