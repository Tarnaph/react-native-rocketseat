/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { addAlgo } from 'redux/ducks/favorites';

/* Styles */
import styles from './styles';

/* Class */
class Main extends Component {
  /* Validação */
  static propTypes = { };

  /* Estado inicial */
  state = { };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ola</Text>
        <Icon name="github-alt" size={48} style={styles.logoIcon} />
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({ });

/* Pega func para o props */
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Main);
