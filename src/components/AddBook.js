import React, { Component } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


class AddBook extends Component {

    displayAuthors = () => {
        const { data } = this.props;
        if (data.loading) {
            return (<option>Loading Authors...</option>)
        } else {
            return (data.authors.map(author=>
            <option key={author.id}>
                {author.name}
            </option>))
        }
    }

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
                        <select className="select">
                            { this.displayAuthors() }
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}



export default graphql(getAuthorsQuery)(AddBook);