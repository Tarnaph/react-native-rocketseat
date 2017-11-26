import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Card from 'components/card';
import Issues from 'pages/issues';


export default class Repositorys extends Component {
  state= {
    repositorys: [],
    //  repositorys: [{
    //    id: 1,
    //    title: 'RockeatNative Issue',
    //    description: 'RockeatSeat',
    //    avatar: 'https:pbs.twimg.com/media/CRmDfqmVAAAiPAg.jpg',
    //  },
    //  {
    //    id: 2,
    //    title: 'Maxresdefault',
    //    description: 'The Seat',
    //    avatar: 'https:www.winterbluemusic.com/wp-content/uploads/2017/02/Imaginative-Tumblr-Girl-maxresdefault-High-Def.jpg',
    //  },
    // ],
  };

  renderRepositorys = () => (
    <FlatList
      style={styles.container}
      data={this.state.repositorys}
      keyExtractor={repositorys => repositorys.id}
      renderItem={({ item }) => <Card repositorys={item} navigation={this.props.navigation} />}
    />
  );

  renderRepositorysNull = () => (
    <View style={styles.containerEmpty}>
      <Text style={styles.textEmpty}>Que tal salvar um repositório ? 🧐</Text>
    </View>
  );

  renderList = () => (
    this.state.repositorys.length
      ? this.renderRepositorys()
      : this.renderRepositorysNull()
  );

  render() {
    return (
      this.renderList()
    );
  }
}
