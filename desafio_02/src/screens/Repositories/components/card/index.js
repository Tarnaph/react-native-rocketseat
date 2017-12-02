/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Repository = ({ repository, navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Issues', { title: repository.name, repo: repository.fullName })}>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: repository.avatarUrl }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{repository.name}</Text>
        <Text style={styles.sub}>{repository.organization}</Text>
      </View>
      <Icons name="angle-right" size={12} style={styles.icon} />
    </View>
  </TouchableOpacity>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    fullName: PropTypes.string,
    organization: PropTypes.string,
    avatarUrl: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};


export default Repository;
