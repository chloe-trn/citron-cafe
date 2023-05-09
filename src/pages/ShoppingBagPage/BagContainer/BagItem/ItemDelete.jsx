// import packages
import React from 'react'
// import assets
import deleteIcon from '../../../../assets/delete.svg'

function ItemDelete(props) {
    return (
        <td className='delete-container'>
            <button onClick={props.handleDeleteItem} >
            <img 
                className='delete-item' 
                src={deleteIcon} 
                alt='Delete shopping bag item icon'    
            />
            </button>
        </td>
    )
}

export default ItemDelete