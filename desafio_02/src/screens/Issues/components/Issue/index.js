/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { metrics } from 'styles';

import styles from './styles';

const Issue = ({ issue: { html_url: url, title, user: { login, avatar_url } } }) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: avatar_url }}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text style={styles.sub}>{login}</Text>
      </View>
      <Icons name="angle-right" size={metrics.iconSize} style={styles.icon} />
    </View>
  </TouchableOpacity>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Issue;
