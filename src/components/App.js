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

  state = {
    selected: "5d48f5173e9d81247c79e05f"
  }

  changeSelected = (selected) => {
    this.setState({ selected })
  } 

  render() {
    return (
      <ApolloProvider client={client}>
        <section style={{backgroundColor: '#f2f2f2'}}>
          <div className="container">
            <BookList changeSelected={this.changeSelected}/>
            <BookDetails selected={this.state.selected}/>
            <AddBook/>
          </div>
        </section>
      </ApolloProvider>
    )
  }
}