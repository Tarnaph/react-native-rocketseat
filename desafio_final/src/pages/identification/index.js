/* Core */
import React, { Component } from 'react';
import VMasker from 'vanilla-masker';
import PropTypes from 'prop-types';

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
import LoginActions from 'redux/ducks/login';

/* Styles */
import styles from './styles';

class Identification extends Component {
  /* Hide Header */
  static navigationOptions = { header: null }

  /* Validacoes */
  static propTypes = {
    login: PropTypes.shape({
      isRegistered: PropTypes.bool,
      isAuthorized: PropTypes.bool.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
    }).isRequired,
    ux: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    checkPhone: PropTypes.func.isRequired,
  }

  /* Initial State */
  state = { phone: '' }

  /* Antes de montar o component */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Sempre que tiver update */
  componentDidUpdate() {
    if (this.props.login.isRegistered === true) { this.props.navigation.dispatch(this.navitagionTo('Login')); }
    if (this.props.login.isRegistered === false) { this.props.navigation.dispatch(this.navitagionTo('Register')); }
  }

  /* Reseta o navigation para a nota de destino */
  navitagionTo = routeName => (
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    })
  )

  /* Verifica se o phone esta registrado no bd */
  checkAndFindPhone = () => {
    Keyboard.dismiss();
    this.props.checkPhone(this.state.phone);
  }

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
        <Btn
          title="Verificar"
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
export default connect(mapStateToProps, mapDispatchToProps)(Identification);
