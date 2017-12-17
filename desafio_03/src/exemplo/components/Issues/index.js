import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text, Linking } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Issues = ({ issues: { html_url, title, user: { login, avatar_url } } }) => (
  <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(html_url)}>
    <Image style={styles.avatar} source={{ url: avatar_url }} />
    <View style={styles.containerText}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.description}>{login}</Text>
    </View>
    <Icons name="chevron-right" style={styles.iconRight} />
  </TouchableOpacity>
);

Issues.propTypes = {
  issues: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Issues;
