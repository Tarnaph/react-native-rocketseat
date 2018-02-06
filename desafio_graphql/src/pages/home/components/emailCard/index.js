/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';

/* Styles */
import styles from './styles';

export default class emailCard extends Component {
  componentWillMount() {
    // console.tron.error(this.props);
  }

  /* Navega até o produto */
  naviageToEmail = () => (
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'ReadEmail',
      params: {
        data: this.props.email,
      },
    }))
  );

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.naviageToEmail}>

        <View style={styles.containerLeft}>
          <Text style={styles.title}>{this.props.email.authorName}</Text>
          <Text style={styles.subTitle}>{this.props.email.subject}</Text>
        </View>

        <View style={styles.containerRight}>
          <Text style={styles.date}>{moment(this.props.email.createdAt).format('DD/MM')}</Text>
        </View>

      </TouchableOpacity>
    )
  };
}
