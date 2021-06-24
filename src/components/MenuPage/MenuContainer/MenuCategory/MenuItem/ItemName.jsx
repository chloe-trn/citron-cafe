import React from 'react'

function ItemName({item,unitPrice,handleItemClick,confirmation}){
    return(
        <button className="item" id={item} onClick={handleItemClick.bind(this,item)} disabled={confirmation}> 
            {item} - {unitPrice}
        </button>
    )
}

export default ItemName