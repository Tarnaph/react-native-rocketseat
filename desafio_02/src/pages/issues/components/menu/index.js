import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import styles from './styles';

const save = async (tab, loadIssues, setStatusState) => {
  await AsyncStorage.setItem('@Desafio02:status', tab)
    .then(() => setStatusState(tab));
  loadIssues();
};

const tabs = [
  { id: 0, name: 'all', title: 'Todas' },
  { id: 1, name: 'open', title: 'Abertas' },
  { id: 2, name: 'closed', title: 'Fechadas' },
];

const Tabs = ({ status, setStatusState, loadIssues }) => (
  <View style={styles.container}>
    {tabs.map(tab => (
      <TouchableOpacity key={tab.id} onPress={() => save(tab.name, loadIssues, setStatusState)}>
        <Text style={[styles.tab, status === tab.name && styles.active]}>{tab.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

Tabs.propTypes = {
  status: PropTypes.string.isRequired,
  loadIssues: PropTypes.func.isRequired,
  setStatusState: PropTypes.func.isRequired,
};

export default Tabs;
