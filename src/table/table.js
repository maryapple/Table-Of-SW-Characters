import React from 'react'
import Row from '../row'
import data from '../data'
import './table.css'

const Table = () => {

    const arr = data.map((elem) => {
        return (<Row {...elem}/>)
    })

    return (
        <table className="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">height</th>
                    <th scope="col">mass</th>
                    <th scope="col">hair_color</th>
                    <th scope="col">skin_color</th>
                    <th scope="col">eye_color</th>
                    <th scope="col">birth_year</th>
                </tr>
            </thead>
            <tbody>
                {arr}
            </tbody>
        </table>
        
    )
}

export default Table