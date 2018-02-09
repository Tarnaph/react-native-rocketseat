/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

/* Styles */
import styles from './styles';

export default class Identication extends Component {
  static navigationOptions = { header: null };
  state = { phone: '', loading: false };
  checkPhone = () => {
    this.setState({ loading: true });
    if (this.state.phone.length < 8) { this.setState({ loading: false }); return; }
    this.props.navigation.navigate('Register');
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
        <Btn
          title="Entrar"
          link={this.checkPhone}
          loading={this.state.loading}
        />
      </View>
    );
  }
}
