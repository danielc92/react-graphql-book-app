import React, { Component } from 'react'
import { gcl } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gcl`
{
    authors {
        name
        id
    }
}
`

export default class AddBook extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
