import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Posts from './src/components/Posts';
import Header from './src/components/Header';
import styles from './src/styles/app';
import './config/ReactotronConfig';

export default class App extends Component<{}> {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        autor: 'Raphael Morales',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Mé faiz elementum girarzis, nisi eros vermeio. Interagi no mé, cursus quis, vehicula ac nisi. Si num tem leite então bota uma pinga aí cumpadi!',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Raphael Morales',
        description: 'Per aumento de cachacis, eu reclamis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Raphael Morales',
        description: 'Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          { this.state.posts.map(post => <Posts key={post.id} post={post} />)}
          <Text style={styles.end}>:)</Text>
        </ScrollView>
      </View>
    );
  }
}
