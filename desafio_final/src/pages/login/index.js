/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TextInput } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

import styles from './styles';

export default class Login extends Component {
  static navigationOptions = { header: null };
  state = { phone: '', password: '', loading: false };
  registerPhone = () => {
    this.setState({ loading: true });
    if (!!this.state.phone && !!this.state.password) { this.props.navigation.navigate('Register') }
    this.setState({ loading: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scheduler</Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={phone => this.setState({ phone })}
          value={this.state.phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Input
          title="Sua senha secreta"
          icon="user"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          keyboardType="default"
          color="purple"
          secureTextEntry
        />
        <Btn
          title="Criar uma conta, é grátis !"
          link={this.registerPhone}
        />
        <Text style={styles.recover}> Esqueceu a senha ? Que pena ...</Text>
      </View>
    );
  }
}
