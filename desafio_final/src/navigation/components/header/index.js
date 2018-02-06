/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

export default class header extends Component {
  componentWillMount() {
    // console.tron.error(this.props);
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Icon name="bars" size={fonts.regular} color={colors.white} />
        </TouchableOpacity>

        <Text style={styles.title}>{this.props.defaultTitle}</Text>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        >
          <Icon name="user" size={fonts.regular} color={colors.white} />
        </TouchableOpacity>

      </View>
    );
  }
}
