import React from 'react'

const ItemConfirmation = ({itemAddedRef,confirmation}) => (
    <div 
        ref={itemAddedRef}
        className={confirmation ? "item-added item-added-animation" : "item-added"}
    >
    <p>Added to bag</p>
    </div>
)

export default ItemConfirmation