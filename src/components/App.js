import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
})
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>App</h1>
        </div>
      </ApolloProvider>
    )
  }
}