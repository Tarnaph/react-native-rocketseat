import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Card extends Component {
  goToScreenIssue= (data) => {
    this.props.navigation.navigate('Issu', { ...data });
  };

  goToGithubIssue= () => {
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.goToScreenIssue(this.props.repositorys)}>
        <Image style={styles.avatar} source={{ url: this.props.repositorys.avatar }} />
        <View style={styles.containerText}>
          <Text style={styles.title}>{this.props.repositorys.title}</Text>
          <Text style={styles.description}>{this.props.repositorys.description}</Text>
        </View>
        <Icon name="chevron-right" style={styles.iconRight}/>
      </TouchableOpacity>
    );
  }
}
