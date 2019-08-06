import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './BookList';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
})
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <BookList/>
        </div>
      </ApolloProvider>
    )
  }
}