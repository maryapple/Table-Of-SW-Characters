import React from 'react'
import Row from '../row'
import './table.css'

const Table = (props) => {

    const arr = props.data.map((elem) => {
        return (
            <Row 
                {...elem}
                key={elem.name}
            />
        )
    })

    return (
        <table className="table table-striped">
            <thead className="thead-dark">
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
