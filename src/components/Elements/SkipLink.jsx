import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Main(props){
    return(
        <Link to={props.id} className='skip-link'>Skip to {props.locationText}</Link>
    )
}

export default Main