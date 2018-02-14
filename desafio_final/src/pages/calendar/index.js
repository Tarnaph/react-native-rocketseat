/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';

/* Components */
import Cards from './components/cards';
import MyCalendar from './components/calendars';
import Adder from './components/adder';

/* Redux */
import { connect } from 'react-redux';
import UserActions from 'redux/ducks/user';

/* Styles */
import styles from './styles';

class Calendar extends Component {
  componentWillMount(){
    console.tron.log(this.props);
  }

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


/* Pega o global state para o props */
const mapStateToProps = state => ({
  user: state.user,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  // requestRegister: (phone, name, password) => dispatch(UserActions.userRequestRegister(phone, name, password)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
