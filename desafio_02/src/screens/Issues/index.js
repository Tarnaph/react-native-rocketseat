/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';

/* Presentational */
import { View, FlatList, RefreshControl, ActivityIndicator, Text, AsyncStorage } from 'react-native';
import { colors } from 'styles';

import Header from './components/Header';
import Tabs from './components/Tabs';
import Issue from './components/Issue';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    header: ({ scene, navigation }) => (
      <Header
        title={scene.route.params.title}
        back={() => navigation.goBack()}
      />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          repo: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {};

  state = {
    status: 'all',
    loading: false,
    refreshing: false,
    error: false,
    issues: [],
    repo: '',
  }

  componentWillMount() {
    this.setState({ repo: this.props.navigation.state.params.repo });

    this.loadIssues();
  }

  saveStatusState = (status) => {
    this.setState({ status });
  }

  loadIssues = async () => {
    this.setState({ loading: true });
    try {
      await this.loadFilter();
      await this.fetchIssues();
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  }

  loadFilter = async () => {
    const status = await AsyncStorage.getItem('@GitIssues:status');

    if (status !== null && status !== 'all') {
      this.setState({ status });
    }
  }

  fetchIssues = async () => {
    this.setState({ refreshing: true });

    const { status, repo } = this.state;
    const response = await api.get(`repos/${repo}/issues?state=${status}`);
    if (!response.ok) throw Error();

    this.setState({ refreshing: false, issues: response.data });
  };

  toogleRender = () => (
    this.state.issues.length > 0
      ? this.renderIssues()
      : this.showError()
  );

  showError = () => (
    <Text style={styles.error}>Weeiirrlll... nenhuma Issue foi encontrada aqui.</Text>
  );

  renderIssues = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadIssues}
        />
      }
      style={[styles.flatRepositories, this.state.error && styles.emptyContainer]}
      data={this.state.issues}
      keyExtractor={issue => issue.id}
      renderItem={({ item }) => <Issue issue={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Tabs
          status={this.state.status}
          saveStatusState={this.saveStatusState}
          loadIssues={this.loadIssues}
        />
        { this.state.loading
          ? <ActivityIndicator size="large" color={colors.black} style={styles.loading} />
          : this.toogleRender()}
      </View>
    );
  }
}
