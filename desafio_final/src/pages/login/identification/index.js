/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TextInput } from 'react-native';

/* Components */
import Btn from 'pages/login/components/btn';
import Input from 'pages/login/components/input';

import styles from './styles';

export default class Identication extends Component {
  static navigationOptions = { header: null };
  checkPhone = () => (this.props.navigation.navigate('Login'));
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scheduler</Text>
        <Input title="Seu número de telefone" icon="phone"/>
        <Btn title="Entrar" link={this.checkPhone}/>
      </View>
    );
  }
}
