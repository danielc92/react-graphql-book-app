import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getBookQuery } from '../apollo/queries';


class BookDetails extends Component {

    render() {
        
        const { data } = this.props;
        
        return (
            <div 
            className="notification is-white" 
            style={{ marginTop: '1rem'}}>
                <div className="content">
                    <h3>Book Details</h3>
                    { 
                        data.book ? 
                        <div className="notification is-white">
                        <h3>{data.book.name}</h3>
                        <p>Ex sint elit nisi et incididunt fugiat aliquip aliqua deserunt et do est consectetur.</p>
                        <p className="tag is-link">{ data.book.genre }</p>
                        <p className="tag is-warning"> { data.book.id }</p>

                        <p>Author: {data.book.author.name}</p>
                        <p>Author age: {data.book.author.age}</p>
                        <p>Other books by this author: { data.book.author.books.map(b => 
                            (<span className="tag is-success">{ b.name }</span>)
                        )}</p>
                        </div>: 
                        <p>No book found for this id...</p>
                    }
                </div>
                
            </div>
        )
    }
}



export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: '5d48bd973a9c4c15e005e965'
            }
        }
    }
})(BookDetails)