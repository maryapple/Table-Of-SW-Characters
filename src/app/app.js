import React from 'react'
import ReactDOM from 'react-dom'
import Table from '../table'
import SearchPanel from '../search'

const App = () => {
    return (
        <div className="container">
            <SearchPanel />
            <Table />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App
