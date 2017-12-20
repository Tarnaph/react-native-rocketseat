/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideError } from 'redux/ducks/modal';

/* Styles */
import styles from './styles';

/* Class Redux` style */
class Error extends Component {
  /* Validacoes */
  static propTypes = {
    hideError: PropTypes.func.isRequired,
    errorMsg: PropTypes.string.isRequired,
  }

  /* Antes de montar o component */
  componentWillMount() {
    setTimeout(() => { this.hideError(); }, 3000);
  }

  hideError = () => this.props.hideError();

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.hideError}>
        <Text style={styles.title}>{this.props.errorMsg}</Text>
      </TouchableOpacity>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  errorMsg: state.modal.errorMsg,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch =>
  bindActionCreators({ hideError }, dispatch);

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Error);
