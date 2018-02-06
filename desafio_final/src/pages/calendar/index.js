/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';

/* Components */
import Cards from './components/cards';

/* Styles */
import styles from './styles';

export default class Calendar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

      <View style={styles.top}>
      </View>

      <View style={styles.medium}>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
        <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H"/>
      </View>

      </ScrollView>
    );
  }
}
