/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

import styles from './styles';

export default class Dashboard extends Component {
  state = { name: '', password: '', confirmPassword: '', loading: false };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerTitle}>
          <Text style={styles.title}>Minha Conta</Text>
        </View>

        <View style={styles.containerMedium}>
          <Input
            title="Nome..."
            icon="user"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            keyboardType="default"
            color="purple"
          />
          <View style={styles.hr}/>
          <Input
            title="Quer alterar sua senha?"
            icon="lock"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            keyboardType="default"
            color="purple"
            secureTextEntry
          />
          <Input
            title="Confirme a senha digitada"
            icon="lock"
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            keyboardType="default"
            color="purple"
            secureTextEntry
          />
          <Btn
            title="Alterar informações"
            loading={this.state.loading}
          />
        </View>

      </View>
    );
  }
}
