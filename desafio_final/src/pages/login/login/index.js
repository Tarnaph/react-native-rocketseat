/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TextInput } from 'react-native';

/* Components */
import Btn from 'pages/login/components/btn';
import Input from 'pages/login/components/input';

import styles from './styles';

export default class Login extends Component {
  static navigationOptions = { header: null };
  registerPhone = () => (this.props.navigation.navigate('Register'));
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scheduler</Text>
        <Input title="Seu número de telefone" icon="phone" />
        <Input title="Sua senha secreta" icon="user" />
        <Btn title="Criar uma conta, é grátis !" link={this.registerPhone}/>
        <Text style={styles.recover}> Esqueceu a senha ? Que pena ...</Text>
      </View>
    );
  }
}
