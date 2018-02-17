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

class Login extends Component {
  // static navigationOptions = { header: null };
  state = { phone: this.props.user.phone, password: ''};

  componentWillMount(){
    console.tron.log(this.props);
  };

  componentDidUpdate(){
    this.props.login.isAuthorized
    && this.props.navigation.dispatch(this.navitagionTo('Calendar'));
  }

  navitagionTo = routeName => (
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    })
  )

  login = () => {
    Keyboard.dismiss();
    this.props.loginRequest(this.state.phone, this.state.password);
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
            phone: VMasker.toPattern(phone, "(99)9999-99999999") })}
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
          title="Entrar"
          link={this.login}
          loading={this.props.ux.loading}
        />
        <Text style={styles.recover}> Esqueceu a senha ? Que pena ...</Text>
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
  loginRequest: (phone,password) => dispatch(LoginActions.loginRequest(phone, password)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Login);
