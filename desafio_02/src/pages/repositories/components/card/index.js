import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';


export default class Card extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      nativate: PropTypes.func,
      setParams: PropTypes.func,
    }).isRequired,
  }

  goToScreenIssue= (data) => {
    this.props.navigation.navigate('Issu', { title: data.name, repository: data.fullName });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.goToScreenIssue(this.props.repository)}>
        <Image style={styles.avatar} source={{ url: this.props.repository.avatarUrl }} />
        <View style={styles.containerText}>
          <Text style={styles.title}>{this.props.repository.fullName}</Text>
          <Text style={styles.description}>{this.props.repository.organization}</Text>
        </View>
        <Icon name="chevron-right" style={styles.iconRight}/>
      </TouchableOpacity>
    );
  }
}
