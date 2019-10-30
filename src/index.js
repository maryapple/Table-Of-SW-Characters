import React from 'react'
import ReactDOM from 'react-dom'
import Table from './table'
import SearchPanel from './input'

const App = () => {
    return (
        <div>
            <SearchPanel />
            <Table />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)