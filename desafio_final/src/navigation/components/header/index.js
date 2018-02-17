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

  adder = () => (
    <TouchableOpacity
      style={styles.iconAddContainer}
      onPress={() => this.props.navigation.navigate('Adder')}
      >
      <Icon name="plus" size={fonts.small} color={colors.white} />
    </TouchableOpacity>
  );

  back = () => (
    <TouchableOpacity
      style={styles.iconBackContainer}
      onPress={() => this.props.navigation.goBack()}
      >
      <Icon name="angle-left" style={styles.iconBack} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>

        { this.props.scene.route.routeName != 'Calendar'
          ? this.back()
          : this.adder()
        }

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
