import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getBookQuery } from '../apollo/queries';


class BookDetails extends Component {

    render() {
        
        const { data } = this.props;
        
        return (
            <div className="notification" style={{ marginTop: '1rem'}}>
                <div className="content">
                    <h3>Book Details</h3>
                    { 
                        data.book ? 
                        <p>{data.book.name}</p>: 
                        <p>No book</p>
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