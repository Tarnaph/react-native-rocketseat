import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, View, AsyncStorage, ActivityIndicator, Text, FlatList, RefreshControl } from 'react-native';
import Card from 'components/card';
import Header from 'components/headers/repositorys';
import { colors } from 'styles';
import api from 'services/api';
import styles from './styles';

export default class Repositorys extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: colors.white },
    header: ({ scene }) => (
      <Header addRepository={name => scene.route.params.addRepository(name)} />
    ),
  }

  static propTypes = {
    navigation: PropTypes.shape({
      nativate: PropTypes.func,
      setParams: PropTypes.func,
    }).isRequired,
  }

  state = {
    repositories: [],
    loading: false,
    refreshing: false,
    msgError: false,
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.loadRepositories().then(() => {
      this.setState({ loading: false });
    });
    // AsyncStorage.clear();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      addRepository: this.addRepository,
      loading: this.state.loading,
    });
  }

  addRepository = (name) => {
    if (name.length === 0) {
      Alert.alert('Ops!', 'Preencha o campo.')
      return;
    }
    this.setState({ loading: true });
    this.findRepoAndSave(name);
  }

  findRepoAndSave = async (repoName) => {
    const response = await api.get(`/repos/${repoName}`);
    if (!response.ok) {
      this.setState({ loading: false });
      Alert.alert('Ops!', 'Não foi encontrado!');
      return;
    }
    if (this.state.repositories.find(e => e.id === response.data.id)) {
      Alert.alert('Ei!', 'Esse Repositório já foi adicionado.');
      this.setState({ loading: false });
      return;
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

    await AsyncStorage.setItem('@Desafio02:repositories', JSON.stringify([newRepo, ...this.state.repositories]));
    this.loadRepositories();
    this.setState({ loading: false });
  }

  loadRepositories = async () => {
    const repositories = await AsyncStorage.getItem('@Desafio02:repositories')
      .then(response => (response ? JSON.parse(response) : []));
    this.setState({
      repositories,
      refreshing: false,
      msgError: false,
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
      data={this.state.repositories}
      keyExtractor={repositories => repositories.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Card repository={item} navigation={this.props.navigation} />}
    />
  )

  renderRepositoriesErro = () => (
    <View style={styles.containerEmpty}>
      <Text style={styles.textEmpty}>Algo deu errado.</Text>
    </View>
  )

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : this.renderRepositoriesErro()
  )

  render() {
    return (
      <View style={styles.container} >
        { this.state.loading
          ? <ActivityIndicator size="small" color={colors.black} style={styles.loading} />
          : this.renderList()}
      </View>
    );
  }
}
