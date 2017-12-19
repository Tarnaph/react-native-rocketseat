/* Core */
import React, { Component } from 'react';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideError } from 'redux/ducks/modal';

import styles from './styles';

class Error extends Component {
  componentWillMount() {
    setTimeout(() => { this.hideError(); }, 3000);
  }

  hideError = () => this.props.hideError();

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.hideError}>
        <Text style={styles.title}> Algo deu errado...</Text>
      </TouchableOpacity>
    );
  }
}

/* Pega func para o props */
const mapDispatchToProps = dispatch =>
  bindActionCreators({ hideError }, dispatch);

/* Connecta os dois, podendo ser null */
export default connect(null, mapDispatchToProps)(Error);
