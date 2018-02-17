/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';
import PropTypes from 'prop-types';

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
import LoginActions from 'redux/ducks/login';

/* Styles */
import styles from './styles';

class Register extends Component {
  /* Hide Header */
  static navigationOptions = { header: null };

  /* Validacoes */
  static propTypes = {
    login: PropTypes.shape({
      isRegistered: PropTypes.bool,
      isAuthorized: PropTypes.bool.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      phone: PropTypes.string.isRequired,
    }).isRequired,
    ux: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    requestRegister: PropTypes.func.isRequired,
  }

  /* Initial State */
  state = {
    phone: this.props.user.phone,
    name: '',
    password: '',
  }

  /* Antes de montar o component */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Sempre que tiver update */
  componentDidUpdate() {
    if (this.props.login.isAuthorized) { this.props.navigation.dispatch(this.navitagionTo('Calendar')); }
  }

  /* Navega até Login */
  backToLogin = () => (this.props.navigation.navigate('Login'));

  /* Reseta o navigation para a nota de destino */
  navitagionTo = routeName => (
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    })
  )

  /* Tenta Registrar */
  register = () => {
    Keyboard.dismiss();
    this.props.requestRegister(this.state.phone, this.state.name, this.state.password);
  };

  /* Render duh! */
  render() {
    return (
      <View style={styles.container}>
        <Notification />
        <Text style={styles.title}>Scheduler</Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={phone => this.setState({ phone: VMasker.toPattern(phone, '(99)9999-99999999') })}
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
          title="Criar uma contra grátis"
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
  notification: state.notification,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  requestRegister: (phone, name, password) => dispatch(LoginActions.loginRequestRegister(phone, name, password)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Register);
