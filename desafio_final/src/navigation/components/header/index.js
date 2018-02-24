/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Components */
import Notification from 'pages/components/notification';

/* Redux */
import { connect } from 'react-redux';
import TodoActions from 'redux/ducks/todo';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

class Header extends Component {
  componentWillMount() {
    // console.tron.error(this.props);
  }

  adder = () => (
    <TouchableOpacity
      style={[styles.iconAddContainer,
      this.props.notification.error === true
      && styles.hide]}
      onPress={this.props.todoShowModal}
    >
      <Icon name="plus" size={fonts.small} color={colors.white} />
    </TouchableOpacity>
  );

  back = () => (
    <TouchableOpacity
      style={[styles.iconBackContainer,
      this.props.notification.error === true
      && styles.hide]}
      onPress={() => this.props.navigation.goBack()}
    >
      <Icon name="angle-left" style={styles.iconBack} />
    </TouchableOpacity>
  );

  backOrAdder = () =>
    { return this.props.scene.route.routeName != 'Calendar'
      ? this.back()
      : this.adder()
    }


  render() {
    return (
      <View style={styles.container}>

        <Notification style={styles.notification}/>
        {this.backOrAdder()}
        <Text
          style={[styles.title,
          this.props.notification.error === true
          && styles.hide]}
        >
          {this.props.defaultTitle}
        </Text>
        <TouchableOpacity
          style={[styles.iconContainer,
          this.props.notification.error === true
          && styles.hide]}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        >
          <Icon name="user" size={fonts.regular} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}


/* Pega o global state para o props */
const mapStateToProps = state => ({
  user: state.user,
  ux: state.ux,
  todo: state.todo,
  login: state.login,
  notification: state.notification,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  todoShowModal: () => dispatch(TodoActions.todoShowModal()),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Header);

