import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const repositorysHeader = () => (
  <View style={styles.container}>
    <View style={styles.headerTitle}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar Reposositório"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
    <View style={styles.rightHeader}>
      <TouchableOpacity onPress={() => {} }>
        <Icon style={styles.button} name="plus" />
      </TouchableOpacity>
    </View>
  </View>
);

export default repositorysHeader;
