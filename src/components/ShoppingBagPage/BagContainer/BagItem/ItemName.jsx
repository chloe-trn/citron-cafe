import React from 'react'

function ItemName(props) {
    return (
        <div className="bag-item-name">
            <span>Item: </span>
            {props.name}
        </div>
    )
}

export default ItemName