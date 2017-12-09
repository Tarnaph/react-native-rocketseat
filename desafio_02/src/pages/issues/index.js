import React, { Component } from 'react';
import { Alert, FlatList } from 'react-native';
import api from 'services/api';
import Card from './components/card';
import styles from './styles';

export default class Repositorys extends Component {
  state = {
    issues: [],
    repositoryName: '',
    status: 'all',
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
        renderItem={({ item }) => <Card issue={item} />}
      />
    );
  }
}
