import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, route, type}) => {
    return (
        <Link to={route} className={`btn btn-${type}`}>{text}</Link>
    )
}

export default Button
