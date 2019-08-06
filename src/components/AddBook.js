import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../apollo/queries';

class AddBook extends Component {

    // State to store form details
    state = {
        name: "",
        genre: "",
        authorId: "",
    }

    displayAuthors = () => {
        // conditionally render authors
        const { getAuthorsQuery } = this.props;

        if (getAuthorsQuery.loading) {
            return (<option>Loading Authors...</option>)
        } else {
            return (getAuthorsQuery.authors.map(author=>
            <option key={author.id} value={author.id}>
                {author.name}
            </option>))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Name of mutation function given in compose at end of file
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [
                { query: getBooksQuery }
            ]
        })
    }

    render() {
        return (
            <div className="notification is-white">
                <div className="content">
                <h3>Add a new book</h3>
                <form onSubmit={this.handleSubmit} id="add-book">
                    <div className="field">
                        <label className="label has-text-grey">Book Name:</label>
                        <input 
                        type="text" 
                        className="input" 
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label className="label has-text-grey">Book Genre:</label>
                        <input 
                        type="text" 
                        className="input"
                        onChange={(e) => this.setState({genre: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label className="label has-text-grey">Book Name:</label>
                        <div className="select">
                            <select 
                            onChange={(e) => this.setState({authorId: e.target.value})}>
                                { this.displayAuthors() }
                            </select>
                        </div>
                    </div>
                    <button className="button is-small is-success is-outlined" type="submit">Add book!</button>
                </form>
            </div>
            </div>
        )
    }
}



export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);