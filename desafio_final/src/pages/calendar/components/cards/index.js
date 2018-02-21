/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

const Cards = ({ title, description, time }) => (
  <View style={styles.container}>
    <View sytle={styles.left}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View sytle={styles.right}>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);

/* PropTypes */
Cards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Cards;

