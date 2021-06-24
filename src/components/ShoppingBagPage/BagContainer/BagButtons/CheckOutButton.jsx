import React from 'react'
import { Link } from "react-router-dom"

function CheckOutButton(props) {
    return (
        <Link to='/check-out'>
            <input 
                id="check-out-btn"
                className="bag-button" 
                type="button" 
                value="Check Out" 
                onClick={props.handleCheckOut} 
                disabled={props.disabled}/>
        </Link>
    )
}

export default CheckOutButton