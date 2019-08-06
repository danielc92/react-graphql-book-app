import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../apollo/queries';

class AddBook extends Component {

    state = {
        name: "",
        genre: "",
        authorId: "",
    }

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

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state.name)
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



export default graphql(getAuthorsQuery)(AddBook);