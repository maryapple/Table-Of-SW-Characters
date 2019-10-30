import React from 'react'
import Row from './cell'
import data from './data.js'
import './table.css'

const Table = () => {

    const arr = data.map((elem) => {
        return (<Row {...elem}/>)
    })

    return (
        <table className="table-style">
            <th>
                <td>name</td>
                <td>height</td>
                <td>mass</td>
                <td>hair_color</td>
                <td>skin_color</td>
                <td>eye_color</td>
                <td>birth_year</td>
            </th>
            <tr>
                {arr}
            </tr>
        </table>
        
    )
}

export default Table