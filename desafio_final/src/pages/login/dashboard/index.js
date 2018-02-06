/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';

/* Components */
import Btn from 'pages/login/components/btn';
import Input from 'pages/login/components/input';

import styles from './styles';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerTitle}>
          <Text style={styles.title}>Minha Conta</Text>
        </View>

        <View style={styles.containerMedium}>
          <Input title="Nome..." icon="user" />
          <View style={styles.hr}/>
          <Input title="Quer alterar sua senha?" icon="lock" />
          <Input title="Confirme a senha digitada" icon="lock" />
          <Btn title="Alterar informações" />
        </View>

      </View>
    );
  }
}
