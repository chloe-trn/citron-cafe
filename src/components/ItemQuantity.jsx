import React from 'react'

function ItemQuantity(props){

    return(
        <input 
            id={props.itemID}
            className='quan-picker' 
            type='number' 
            value={props.quantity}
            min='1'
            onChange={props.handleInputQuantityChange}
        />
    )
}

export default ItemQuantity