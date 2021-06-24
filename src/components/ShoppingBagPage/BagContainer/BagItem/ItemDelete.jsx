import React from 'react'
import deleteIcon from "../../../../assets/cross.svg"

function ItemDelete(props) {
    return (
        <div className="delete-container">
            <img 
                className="delete-item" 
                src={deleteIcon} 
                alt="Delete shopping bag item icon" 
                onClick={props.handleDeleteItem} 
            />
        </div>
    )
}

export default ItemDelete