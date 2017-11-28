/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'config/ReactotronConfig';

/* Presentational */
import { View, AsyncStorage, ActivityIndicator, Text, FlatList, RefreshControl } from 'react-native';
import api from 'services/api';

import { colors } from 'styles';

import Header from './components/Header';
import Repository from './components/Repository';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: ({ scene }) => (
      <Header addRepository={name => scene.route.params.addRepository(name)} />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      setParams: PropTypes.func,
    }).isRequired,
  }

  state = {
    repositories: [],
    alreadyExists: false,
    loading: false,
    refreshing: false,
    error: false,
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.loadRepositories().then(() => {
      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    this.props.navigation.setParams({
      addRepository: this.addRepository,
      loading: this.state.loading,
    });
  }

  addRepository = (name) => {
    this.setState({ error: false });

    if (name.length === 0) return;

    this.setState({ loading: true });

    this.checkAndSaveRepository(name)
      .then(() => {
        this.loadRepositories().then(() => this.setState({ loading: false }));
      })
      .catch(() => this.setState({ error: true, loading: false }));
  }

  alreadyExists = () => this.setState({ alreadyExists: true, loading: false });

  checkAndSaveRepository = async (repoName) => {
    const response = await api.get(`/repos/${repoName}`);
    if (!response.ok) throw Error();
    if (this.state.repositories.find(e => e.id === response.data.id)) {
      this.alreadyExists();
      throw Error();
    }

    const {
      id,
      name,
      full_name: fullName,
      organization: { login: organization },
      owner: { avatar_url: avatarUrl },
    } = response.data;

    const newRepo = {
      id,
      name,
      fullName,
      organization,
      avatarUrl,
    };

    await AsyncStorage.setItem('@GitIssues:repositories', JSON.stringify([newRepo, ...this.state.repositories]));
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = await AsyncStorage.getItem('@GitIssues:repositories')
      .then(response => (response ? JSON.parse(response) : []));

    this.setState({
      repositories,
      refreshing: false,
      error: false,
      alreadyExists: false,
    });
  }

  renderRepositories = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadRepositories}
        />
      }
      style={[styles.flatRepositories, this.state.error && styles.emptyContainer]}
      data={this.state.repositories}
      keyExtractor={respository => respository.id}
      renderItem={({ item }) => <Repository repository={item} navigation={this.props.navigation} />}
    />
  );

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : <Text style={styles.empty}>Nenhum repositório encontrado</Text>
  );

  renderError = () => (
    <View style={styles.errorContainer}>
      { this.state.alreadyExists
        ? <Text style={styles.error}>Repositório já existe</Text>
        : <Text style={styles.error}>Repositório não encontrado</Text>}
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <View>
          { this.state.error && this.renderError() }
          { this.state.loading
            ? <ActivityIndicator size="small" color={colors.black} style={styles.loading} />
            : this.renderList()}
        </View>
      </View>
    );
  }
}
