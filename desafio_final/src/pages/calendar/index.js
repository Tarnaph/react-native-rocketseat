/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';

/* Components */
import Cards from './components/cards';
import MyCalendar from './components/calendars';
import Adder from './components/adder';

/* Styles */
import styles from './styles';

export default class Calendar extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Adder />

        <View style={styles.top}>
          <MyCalendar />
        </View>

        <ScrollView style={styles.medium}>
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
          <Cards title="Minha Aplicaçõa" description="Ainda Falta muito" time="18H" />
        </ScrollView>

      </View>
    );
  }
}
