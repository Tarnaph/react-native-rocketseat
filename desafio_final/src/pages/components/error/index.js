/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';

/* Styles */
import styles from './styles';

/* Class Redux` style */
export default class Error extends Component {
  state = { hide: false };
  /* Validacoes */
  // static propTypes = {
  //   hideError: PropTypes.func.isRequired,
  //   errorMsg: PropTypes.string.isRequired,
  // }

  /* Antes de montar o component */
  componentWillMount() {
    this.setState({ hide: false })
    // setTimeout(() => { this.setState({ hide: true }) }, 3000);
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container, this.state.hide ? styles.hide : styles.show]}>
        <Text style={styles.title}>{this.props.msg}</Text>
      </TouchableOpacity>
    );
  }
}