/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

/* Styles */
import styles from './styles';

export default class Register extends Component {
  static navigationOptions = { header: null };
  state = { phone: '', name: '', password: '', loading: false };
  backToLogin = () => (this.props.navigation.navigate('Login'));
  login = () => {
    this.setState({ loading: true });
    if (!!this.state.phone && !!this.state.name && !!this.state.password) {
      this.props.navigation.navigate('Calendar');
    }
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
          title="Nome Completo"
          icon="user"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          keyboardType="default"
          color="purple"
        />
        <Input
          title="Sua senha secreta"
          icon="lock"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          keyboardType="default"
          color="purple"
          secureTextEntry
        />
        <Btn
          title="Entrar"
          link={this.login}
          loading={this.state.loading}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={this.backToLogin}>
          <Text style={styles.backTitle}> Mas... eu já tenho uma conta.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
