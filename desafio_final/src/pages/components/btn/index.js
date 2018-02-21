/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

/* Const Btn */
const Btn = ({ title, link, loading }) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={link}>
    { loading
      ? <ActivityIndicator size="small" color={colors.white} />
      : <Text style={styles.title}>{title}</Text>
    }
  </TouchableOpacity>
);

/* PropTypes */
Btn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Btn;
