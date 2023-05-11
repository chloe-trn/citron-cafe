// import packages
import React from 'react'
import { Link } from 'react-router-dom'

function BrandHeading(props){
    return(
        <Link to='/' className='navbar-brand'>
            <h1>{props.brandName}</h1>
        </Link>
    )
}

export default BrandHeading