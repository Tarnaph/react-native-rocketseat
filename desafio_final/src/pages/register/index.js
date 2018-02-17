/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';

/* Navitation */
import { NavigationActions } from 'react-navigation';

/* Presentational */
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';

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

class Register extends Component {
  // static navigationOptions = { header: null };

  componentWillMount(){
    console.tron.log(this.props);
  }

  componentDidUpdate(){
    this.props.login.isAuthorized
    && this.props.navigation.dispatch(this.navitagionTo('Calendar'));
  }

  state = { phone: this.props.user.phone, name: '', password: '', loading: false };

  backToLogin = () => (this.props.navigation.navigate('Login'));

  navitagionTo = routeName => (
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    })
  )

  register = () => {
    Keyboard.dismiss();
    this.props.requestRegister(this.state.phone, this.state.name, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Notification />
        <Text style={styles.title}>Scheduler</Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={phone => this.setState({
            phone: VMasker.toPattern(phone, "(99) 9999-99999999") })}
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
          link={this.register}
          loading={this.props.ux.loading}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={this.backToLogin}>
          <Text style={styles.backTitle}> Mas... eu já tenho uma conta.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  user: state.user,
  ux: state.ux,
  login: state.login,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  requestRegister: (phone, name, password) => dispatch(LoginActions.loginRequestRegister(phone, name, password)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Register);
