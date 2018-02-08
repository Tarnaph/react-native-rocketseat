/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

import styles from './styles';

export default class Register extends Component {
  static navigationOptions = { header: null };
  backToLogin = () => (this.props.navigation.navigate('Login'));
  login = () => (this.props.navigation.navigate('Calendar'));
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scheduler</Text>
        <Input title="Seu número de telefone" icon="phone" />
        <Input title="Nome Completo" icon="user" />
        <Input title="Sua senha secreta" icon="lock" />
        <Btn title="Entrar" link={this.login}/>
        <TouchableOpacity activeOpacity={0.7} onPress={this.backToLogin}>
          <Text style={styles.backTitle}> Mas... eu já tenho uma conta.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
