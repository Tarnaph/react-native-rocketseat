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

class Identication extends Component {
  static navigationOptions = { header: null };
  state = { phone: '', localError: false, localErrorMsg: '' };

  componentDidUpdate(){
    if (this.props.user.isPhoneScreen === true)
    {
      this.props.user.registered === true
        && this.props.navigation.navigate('Login');
      this.props.user.registered === false
        && this.props.navigation.navigate('Register');
    }
  }

  checkAndFindPhone = () => {
    Keyboard.dismiss();
    if (this.state.phone.length > 8) {
      this.props.checkPhone(this.state.phone);
    } else {
      this.setState({ localError: true, localErrorMsg: 'Invalid format' })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.localError && <Error msg={this.state.localErrorMsg} /> }
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
        <Btn
          title="Entrar"
          link={this.checkAndFindPhone}
          loading={this.props.user.loading}
        />
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
  checkPhone: phone => dispatch(UserActions.userFindPhone(phone)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Identication);