import React from 'react'

function DeleteBagButton(props) {
    return (
        <input 
            id="delete-btn"
            className="bag-button" 
            type="button" 
            value="Clear Bag" 
            onClick={props.handleClearBag}
        />
    )
}

export default DeleteBagButton