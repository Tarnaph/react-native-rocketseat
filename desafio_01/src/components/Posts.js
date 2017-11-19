import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/posts';

const Posts = ({ post }) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.title} >#{post.id} - {post.title}</Text>
    </View>
    <View>
      <Text style={styles.autor}>@{post.autor}</Text>
    </View>
    <View style={styles.hr}>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  </View>
);

Posts.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    autor: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Posts;