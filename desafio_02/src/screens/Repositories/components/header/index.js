import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    saveRepository: PropTypes.func.isRequired,
  }

  state = {
    name: 'teste',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar Reposositório"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={name => this.setState({ name })}
            // igual a onChangeText={name = (name) => { this.setState({ name }) }}
          />
        </View>
        <Text>{this.state.name}</Text>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => this.props.saveRepository(this.state.name)}>
            <Icon style={styles.button} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
