import React, { Component } from 'react';
// Helps bind apollo to react
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../apollo/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    render() {
        console.log(this.props)
        const { data } = this.props;
        return (
            <div className="list is-hoverable">
                {
                    data.loading ? 
                    <div className="list-item">Loading List...</div>
                    :
                    data.books.map(book => (
                        <div 
                        key={ book.id } 
                        className="list-item">
                            { book.name }
                        <br></br>
                        <span className="tag is-success">
                            { book.genre }
                        </span>
                        </div>))
                }
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);
