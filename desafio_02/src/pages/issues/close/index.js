import React, { Component } from 'react';
import { Alert, FlatList } from 'react-native';
import CardIssues from 'components/cardIssues';
import { colors } from 'styles';
import api from 'services/api';
import styles from './styles';

export default class Repositorys extends Component {
  static navigationOptions: {
    headerTitle: 'Repositório',
    headerStyle: { backgroundColor: colors.white },
  }

  state= {
    issues: [],
    repositoryName: '',
    status: 'close',
  }

  componentWillMount() {
    this.setState({ repositoryName: this.props.navigation.state.params.repo });
  }

  componentDidMount() {
    this.findIssues(this.state.repositoryName, this.state.status);
  }

  findIssues = async (repo, status) => {
    const response = await api.get(`repos/${repo}/issues?state=${status}`);
    if (!response.ok) {
      this.setState({ loading: false });
      Alert.alert('Ops!', 'Algo deu errado.');
      return;
    }
    this.setState({ issues: response.data });
  }

  render() {
    return (
      <FlatList style={styles.flatContainer}
        data={this.state.issues}
        keyExtractor={issues => issues.id}
        renderItem={({ item }) => <CardIssues issue={item} />}
      />
    );
  }
}
