import React from 'react'

const Row = (props) => {
    const {name, height, mass, hair_color, skin_color, eye_color, birth_year} = props
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.height}</td>
            <td>{props.mass}</td>
            <td>{props.hair_color}</td>
            <td>{props.skin_color}</td>
            <td>{props.eye_color}</td>
            <td>{props.birth_year}</td>
        </tr>
    )
}

export default Row