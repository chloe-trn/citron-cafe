// import packages
import React from 'react'
import { Link } from 'react-router-dom'

function BrandLogo(){
    return(
        <Link to='/' className='navbar-brand'>
            <h1>Citron Café</h1>
        </Link>
    )
}

export default BrandLogo