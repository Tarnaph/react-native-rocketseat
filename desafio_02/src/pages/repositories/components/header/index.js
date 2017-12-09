import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class repositorysHeader extends Component {
  state = {
    name: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar Repositório"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => this.props.addRepository(this.state.name)}>
            <Icon style={styles.button} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
