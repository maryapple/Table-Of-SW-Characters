import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Table from '../table'
import SearchPanel from '../search'
import data from '../data'
import getTheHighest from '../theHighest'

export default class App extends Component {

    state = {
        // term - текст, который вводим в инпуте
        term: ''
    }

    search(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.name
                .toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onSearchChange = (term) => {
        this.setState({ term })
    }

/*     getTheHighest(items) {
        return (items) => {
            Math.max(...items.map(
                person => person.height
            ))
        }
    } */

    render () {
        const visibleData = this.search(data, this.state.term)

        const theHighest = getTheHighest(data)

        return (
            <div className="container">
                <h1>The table of Star Wars heroes</h1>
                <SearchPanel
                    onSearchChange={this.onSearchChange}
                    term={this.state.term}
                />
                <Table
                    data={visibleData}
                    theHighest={theHighest} />
            </div>
        )
    }   
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
