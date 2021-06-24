import React from 'react'

function ItemQuantity(props){
    // define which keys can be used in the input number picker 
    const keysAvailable = ["0","1","2","3","4","5","6","7","8","9",  
                           "Backspace","ArrowRight","ArrowLeft"]; 
    // allow only keys defined when user is typing in number input field 
    const handleTyping = (e) => {
        if(!keysAvailable.includes(e.key)){e.preventDefault();}
    } 

    return(
        <input 
            className="quan-picker" 
            type="number" 
            value={props.quantity}
            min="1"
            onKeyDown={handleTyping}
            onChange={props.handleInputQuantityChange}
            style={props.style}
        />
    )
}

export default ItemQuantity