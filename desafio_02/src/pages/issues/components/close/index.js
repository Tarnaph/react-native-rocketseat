import React, { Component } from 'react';
import { Alert, FlatList, RefreshControl } from 'react-native';
import Card from '../card';
import { colors } from 'styles';
import api from 'services/api';
import styles from './styles';

export default class Repositorys extends Component {
  static navigationOptions: {
    headerTitle: title,
    headerStyle: { backgroundColor: colors.white },
  }

  state= {
    issues: [],
    repositoryName: '',
    status: 'closed',
    loading: false,
  }

  componentWillMount() {
    this.setState({ repositoryName: this.props.navigation.state.params.repo });
    this.props.navigation.setParams({
      title: this.props.navigation.state.params.title,
    });
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
    this.setState({ issues: response.data, loading: false });
  }

  render() {
    return (
      <FlatList
        style={styles.flatContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.findIssues}
          />
        }
        data={this.state.issues}
        keyExtractor={issues => issues.id}
        renderItem={({ item }) => <Card issue={item} />}
      />
    );
  }
}
