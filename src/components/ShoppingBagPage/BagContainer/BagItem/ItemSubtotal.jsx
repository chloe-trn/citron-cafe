import React from 'react'

function ItemSubtotal(props) {
    return (
        <td className='bag-subtotal'>{'$' + props.subtotal}</td>
    )
}

export default ItemSubtotal