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

  iconMenu = () => (
    <Icon name="bars" size={fonts.big} color={colors.blue} />
  );

  iconBack = () => (
    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
      <Icon name="arrow-left" size={fonts.big} color={colors.white} />
    </TouchableOpacity>
  );

  iconNewMail = () => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('NewEmail')}
    >
      <Icon name="paper-plane-o" size={fonts.big} color={colors.white} />
    </TouchableOpacity>
  );

  iconNull = () => (
    <Icon name="paper-plane-o" size={fonts.big} color={colors.blue} />
  );

  backOrMenu = () => (
    this.props.navigation.state.index === 0
    ? this.iconMenu()
    : this.iconBack()
  );

  newOrNull = () => (
    this.props.navigation.state.index === 0
    ? this.iconNewMail()
    : this.iconNull()
  );

  sceneIsActive = (scenes) => {
    routeActive = scenes.filter(scene => scene.isActive === true );
    return routeActive[0].route.routeName;
  };

  nameOrDefault = () => (
    this.sceneIsActive(this.props.scenes) === 'ReadEmail'
    ? <Text style={styles.title}>{this.props.navigation.state.routes[1].params.data.authorName}</Text>
    : <Text style={styles.title}>Go GraphQL Mailer</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.backOrMenu() }
        { this.nameOrDefault() }
        { this.newOrNull() }
      </View>
    );
  }
}
