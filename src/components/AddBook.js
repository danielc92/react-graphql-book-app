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
                <form id="add-book">
                    <div className="field">
                        <label className="label">Book Name:</label>
                        <input type="text" className="input"/>
                    </div>

                    <div className="field">
                        <label className="label">Book Genre:</label>
                        <input type="text" className="input"/>
                    </div>

                    <div className="field">
                        <label className="label">Book Name:</label>
                        <select>
                            <option>Select Author</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
