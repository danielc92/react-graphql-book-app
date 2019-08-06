import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AddBook from './AddBook';
import BookList from './BookList';
import BookDetails from './BookDetails'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
})
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <BookList/>
         
          <BookDetails/>

          <AddBook/>
        </div>
      </ApolloProvider>
    )
  }
}