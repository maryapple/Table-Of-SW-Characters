import React, { Component } from 'react'
import './search.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onSearchChange(term)
    }

    render () {
        return (
            <div>
                <input 
                    className="form-control col-sm-2" 
                    type="search" 
                    placeholder="Search"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                 />
            </div>
            // <form className="form-inline" >
            //     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            // </form>
        )
    }
}
