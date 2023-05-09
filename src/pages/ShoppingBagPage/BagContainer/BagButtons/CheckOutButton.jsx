// import packages
import React from 'react'
import { Link } from 'react-router-dom'

function CheckOutButton(props) {
    return (
        <Link 
            to='/check-out' 
            id='check-out-btn' 
            className='bag-button'  
            onClick={props.handleCheckOut}
            disabled={props.disabled}
        >
        Check out    
        </Link>
    )
}

export default CheckOutButton