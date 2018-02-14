/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';

/* Presentational */
import { View, Text, Keyboard } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';
import Error from 'pages/components/error';

/* Redux */
import { connect } from 'react-redux';
import UserActions from 'redux/ducks/user';

/* Styles */
import styles from './styles';

class Login extends Component {
  static navigationOptions = { header: null };
  state = { phone: this.props.user.phone, password: ''};

  componentWillMount(){
    // console.tron.log(this.props);
  };

  componentDidUpdate(){
    if(this.props.user.isLoginScreen === true) {
      this.props.user.isAuthorized && this.props.navigation.navigate('Calendar');
    }
  }

  login = () => {
    Keyboard.dismiss();
    if (this.state.phone.length > 8) {
      this.props.requestLogin(this.state.phone, this.state.password);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        { this.props.user.error && <Error msg={this.props.user.msgError} /> }
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
          loading={this.props.user.loading}
        />
        <Text style={styles.recover}> Esqueceu a senha ? Que pena ...</Text>
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
  requestLogin: (phone,password) => dispatch(UserActions.userRequestLogin(phone,password)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Login);
