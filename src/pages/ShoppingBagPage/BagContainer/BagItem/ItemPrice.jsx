// import packages
import React from 'react'

function ItemPrice(props) {
    return (
        <td className='bag-unit-price'>{'$ ' + props.price}</td>
    )
}

export default ItemPrice