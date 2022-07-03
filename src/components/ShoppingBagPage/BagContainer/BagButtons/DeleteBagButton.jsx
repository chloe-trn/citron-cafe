// import packages
import React from 'react'

function DeleteBagButton(props) {
    return (
        <button
            id='delete-btn'
            className='bag-button' 
            onClick={props.handleClearBag}
        >
        Clear Bag
        </button>
    )
}

export default DeleteBagButton