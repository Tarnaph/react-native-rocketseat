/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    addRepository: PropTypes.func.isRequired,
  }

  state = {
    name: '',
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar Repositório"
          placeholderTextColor={colors.dark}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
        />
        <TouchableOpacity onPress={() => this.props.addRepository(this.state.name)}>
          <Icons name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
