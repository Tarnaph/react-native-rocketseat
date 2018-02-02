/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

/* Graphql */
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

/* Styles */
import styles from './styles';

class newEmail extends Component {
  state = {
    authorMail: 'raphael.morales@outlook.com',
    authorName: 'Raphael Morales',
    to: '',
    subject: '',
    text: '',
  }

  componentWillMount() {
    console.tron.log(this.props);
  }

  sendMail = async () => {
    const { authorMail, authorName, to, subject, text } = this.state;
    const newMessage = await this.props.newMail({
      authorMail, authorName, to, subject, text,
    });
    this.setState({ to: '', subject: '', text: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TextInput
            style={styles.inputTop}
            placeholder="Para quem ?"
            underlineColorAndroid="transparent"
            onChangeText={(to) => this.setState({to})}
            value={this.state.to}
          />
          <TextInput
            style={styles.inputTop}
            placeholder="Qual assunto ?"
            underlineColorAndroid="transparent"
            onChangeText={(subject) => this.setState({subject})}
            value={this.state.subject}
          />
        </View>

        <ScrollView style={styles.medium}>
          <TextInput
            style={styles.inputMedium}
            placeholder="Digite a sua mensagem ..."
            underlineColorAndroid="transparent"
            multiline
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </ScrollView>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.sendMail}
          >
            <Text style={styles.btnTitle}>Enviar mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MessageMutation = gql`
  mutation(
      $authorMail: String!
      $authorName: String!
      $to: String!
      $subject: String!
      $text: String!
  ) {
    createMail(
        authorMail: $authorMail
        authorName: $authorName
        to: $to
        subject: $subject
        text: $text
    ) {
      id
      to
      subject
    }
  }
`;
export default graphql(MessageMutation, {
  props: ({ mutate }) => ({
    newMail: ({ authorMail, authorName, to, subject, text }) => mutate({
      variables: { authorMail, authorName, to, subject, text },
    }),
  }),
})(newEmail);
