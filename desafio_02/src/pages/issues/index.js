import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styles from './styles';
import Card from 'components/card';

export default class Repositorys extends Component {
  state= {
    repositorys: [{
      id: 1,
      title: 'RockeatNative Issue',
      description: 'RockeatSeat',
      avatar: 'https://pbs.twimg.com/media/CRmDfqmVAAAiPAg.jpg',
    },
    {
      id: 2,
      title: 'Maxresdefault',
      description: 'The Seat',
      avatar: 'https://www.winterbluemusic.com/wp-content/uploads/2017/02/Imaginative-Tumblr-Girl-maxresdefault-High-Def.jpg',
    },
    ],
  };

  render() {
    return (
      <FlatList style={styles.flatContainer}
        data={this.state.repositorys}
        keyExtractor={repositorys => repositorys.id}
        renderItem={({ item }) => <Card repositorys={item} />}
      />
    );
  }
}
