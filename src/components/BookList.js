import React, { Component } from 'react';
// Helps create the graphql query
import { gql } from 'apollo-boost';
// Helps bind apollo to react
import { graphql } from 'react-apollo';



class BookList extends Component {
    render() {
        console.log(this.props)
        const { data } = this.props;
        return (
            <div>
                {
                    data.loading ? 
                    <progress className="progress is-small is-primary" max="100">15%</progress>
                    :
                    data.books.map(book => (
                        <div key={book.id} className="notification">
                            <h4 className="title">{ book.name }</h4>
                            <p class="tag is-dark">{ book.genre }</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);
