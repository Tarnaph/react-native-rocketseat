/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import styles from './styles';

const saveTab = async (tab, loadIssues, saveStatusState) => {
  await AsyncStorage.setItem('@GitIssues:status', tab)
    .then(() => saveStatusState(tab));

  loadIssues();
};

const tabs = [
  { id: 'all', name: 'Todas' },
  { id: 'open', name: 'Abertas' },
  { id: 'closed', name: 'Fechadas' },
];

const Tabs = ({ status, saveStatusState, loadIssues }) => (
  <View style={styles.container}>
    {tabs.map(tab => (
      <TouchableOpacity key={tab.id} onPress={() => saveTab(tab.id, loadIssues, saveStatusState)}>
        <Text style={[styles.tab, status === tab.id && styles.active]}>{tab.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

Tabs.propTypes = {
  status: PropTypes.string.isRequired,
  loadIssues: PropTypes.func.isRequired,
  saveStatusState: PropTypes.func.isRequired,
};

export default Tabs;
