/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

/* Components */
import EmailCard from 'pages/home/components/emailCard';

/* GraphQL */
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

/* Styles */
import styles from './styles';

const author = 'raphael.morales@outlook.com';

/* Class */
class Main extends Component {
  /* Validação */
  static propTypes = { };

  /* Estado inicial */
  state = { };

  componentWillMount() {
    console.tron.log(this.props);
  }

  componentDidMount() {
    this.props.conversation.subscribeToMore({
      document: gql`
        subscription onMailAdded($author: String!) {
          Mail(filter: {
            mutation_in: [CREATED]
            node: {
              to: $author
            }
          }) {
            node {
              id
              authorMail
              authorName
              subject
              text
              createdAt
            }
          }
        }
      `,
      variables: {
        author,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data['Mail']) return prev;

        const newItem = subscriptionData.data['Mail'].node;


        return { ...prev, allMails: [ ...prev.allMails, newItem ] };
      }
    });
  }

  renderListMail = () => (
    this.props.conversation.allMails.map(mail => (
      <EmailCard key={mail.id} navigation={this.props.navigation} email={mail}/>
    ))
  );

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        { this.props.conversation.loading
          ? <ActivityIndicator style={styles.loading} color="#FFF" />
          : this.renderListMail()
        }
      </ScrollView>
    );
  }
}

const ConversationQuery = gql`
{
  allMails(filter: {
    to: "raphael.morales@outlook.com"
  }), {
    id
    authorMail
    authorName
    subject
    text
    createdAt
  }
}
`;

export default graphql(ConversationQuery, {
  name: 'conversation',
})(Main);

