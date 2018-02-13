/* Core */
import React, { Component } from 'react';
import _ from 'lodash';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

/* Redux */
import { connect } from 'react-redux';
import UserActions from 'redux/ducks/user';

/* Styles */
import styles from './styles';

class Identication extends Component {
  static navigationOptions = { header: null };
  state = { phone: '' };

  componentWillMount(){
    console.tron.log(this.props);
    console.tron.log(this.state);
  }

  componentDidUpdate(){
    this.props.user.registered === true
      && this.props.navigation.navigate('Login');
    this.props.user.registered === false
      && this.props.navigation.navigate('Register');
  }

  checkAndFindPhone = () => {
    if (this.state.phone.length > 1) {
      this.props.checkPhone(this.state.phone);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scheduler</Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={phone => this.setState({ phone })}
          value={this.state.phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Btn
          title={this.props.user.registered ? 'Login' : 'Cadastrar'}
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