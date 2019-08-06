import React, { Component } from 'react';
// Helps bind apollo to react
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../apollo/queries';

class BookList extends Component {
    render() {
        const { data } = this.props;
        return (
            <section className="notification is-white">
                <section className="content">
                <h3>Book List</h3>
                <div className="list is-hoverable">
                {
                    data.loading ? 
                    <div className="list-item">Loading List...</div>
                    :
                    data.books.map(book => (
                        <div 
                        key={ book.id } 
                        className="list-item">{ book.name }
                        </div>))
                }
            </div>
                </section>
            </section>
            
        )
    }
}

export default graphql(getBooksQuery)(BookList);
