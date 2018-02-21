/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Keyboard } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

/* Redux */
import { connect } from 'react-redux';
import UserActions from 'redux/ducks/user';

/* Styles */
import styles from './styles';

class Dashboard extends Component {
  /* Validacoes */
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    ux: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    updateUser: PropTypes.func.isRequired,
  }

  /* Initial State */
  state = {
    name: this.props.user.name,
    password: '',
    confirmPassword: '',
  };

  /* Antes de montar com component */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Update User */
  update = () => {
    Keyboard.dismiss();
    this.props.updateUser(
      this.props.user.id,
      this.props.user.token,
      this.state.name,
      this.state.password,
      this.state.confirmPassword,
    );
    this.setState({ password: '', confirmPassword: '' });
  }

  /* Redenr Duh! */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Minha Conta</Text>
        </View>
        <View style={styles.containerMedium}>
          <Input
            title="Nome..."
            icon="user"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            keyboardType="default"
            color="purple"
          />
          <View style={styles.hr} />
          <Input
            title="Quer alterar sua senha?"
            icon="lock"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            keyboardType="default"
            color="purple"
            secureTextEntry
          />
          <Input
            title="Confirme a senha digitada"
            icon="lock"
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            keyboardType="default"
            color="purple"
            secureTextEntry
          />
          <Btn
            title="Alterar informações"
            link={this.update}
            loading={this.props.ux.loading}
          />
        </View>
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
  updateUser: (id, token, name, password, confirmPassword) =>
    dispatch(UserActions.userUpdateRequest(id, token, name, password, confirmPassword)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
