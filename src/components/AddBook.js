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
            <option key={author.id}>
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
            <div>
                <form onSubmit={this.handleSubmit} id="add-book">
                    <div className="field">
                        <label className="label">Book Name:</label>
                        <input 
                        type="text" 
                        className="input" 
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label className="label">Book Genre:</label>
                        <input 
                        type="text" 
                        className="input"
                        onChange={(e) => this.setState({genre: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label className="label">Book Name:</label>
                        <select 
                        className="select"
                        onChange={(e) => this.setState({authorId: e.target.value})}>
                            { this.displayAuthors() }
                        </select>
                    </div>
                    <button className="button" type="submit">go</button>
                </form>
            </div>
        )
    }
}



export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);