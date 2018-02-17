/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';

/* Navitation */
import { NavigationActions } from 'react-navigation';

/* Presentational */
import { View, Text, Keyboard } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';
import Notification from 'pages/components/notification';

/* Redux */
import { connect } from 'react-redux';
import UserActions from 'redux/ducks/user';
import LoginActions from 'redux/ducks/login';

/* Styles */
import styles from './styles';

class Identication extends Component {
  static navigationOptions = { header: null }

  state = { phone: '' }

  componentWillMount() { console.tron.log(this.props); }
  componentDidUpdate() {
    if (this.props.login.isRegistered === true) { this.props.navigation.dispatch(this.navitagionTo('Login')); }
    if (this.props.login.isRegistered === false) { this.props.navigation.dispatch(this.navitagionTo('Register')); }
  }

  navitagionTo = routeName => (
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    })
  )

  checkAndFindPhone = () => {
    if (this.state.phone.length > 1) {
      Keyboard.dismiss();
      this.props.checkPhone(this.state.phone);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Notification />
        <Text style={styles.title}>Scheduler</Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={phone => this.setState({
            phone: VMasker.toPattern(phone, "(99)9999-99999999") })}
          value={this.state.phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Btn
          title="Entrar"
          link={this.checkAndFindPhone}
          loading={this.props.ux.loading}
        />
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  user: state.user,
  ux: state.ux,
  login: state.login,
  notification: state.notification,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  checkPhone: phone => dispatch(LoginActions.loginPhoneCheck(phone)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Identication);