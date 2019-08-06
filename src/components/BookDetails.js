import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo';
import { getBookQuery } from '../apollo/queries';


class BookDetails extends Component {

    render() {
    
        return (
            <div>
                <p>Output the book details here.</p>
            </div>
        )
    }
}



export default graphql(getBookQuery)(BookDetails)