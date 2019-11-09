import React from 'react'

const Row = (props) => {
    const {name, height, mass, hair_color, skin_color, eye_color, birth_year} = props
    return (
        <tr>
            <td>{name}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{hair_color}</td>
            <td>{skin_color}</td>
            <td>{eye_color}</td>
            <td>{birth_year}</td>
        </tr>
    )
}

export default Row
