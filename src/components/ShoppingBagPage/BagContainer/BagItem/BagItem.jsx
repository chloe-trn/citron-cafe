// import packages
import React, { useContext, useState, useEffect } from 'react'
// import contexts 
import { BagFunctionsContext } from '../../../../App'
// import components
import ItemName from './ItemName'
import ItemPrice from './ItemPrice'
import ItemQuantity from '../../../ItemQuantity'
import ItemSubtotal from './ItemSubtotal'
import ItemDelete from './ItemDelete'

function BagItem({item,index}) {

    const {handleQuantityChange, deleteItem} = useContext(BagFunctionsContext)
    const [quantity, setQuantity] = useState(item.quantity)

    const handleInputQuantityChange = (e) => {
        if (e.target.value === '') {
            setQuantity(quantity)
            alert('The minimum item quantity is 1. Please use the delete button if you would like to remove the item from your shopping bag')
        } else {
            setQuantity(e.target.value)
        } 
    }

    const handleDeleteItem = () => deleteItem(index)

    useEffect(() => {
        if (item.quantity !== quantity){
            handleQuantityChange(item.item,parseInt(quantity),'bag')
        }
    },[quantity])

    return (
        <tr className='bag-item'>
            <ItemName name={item.item}/> 
            <ItemPrice price={item.unitPrice} />
            <td className='bag-quantity'>
                <ItemQuantity 
                    itemID={item.item}
                    quantity={quantity} 
                    handleInputQuantityChange={handleInputQuantityChange}
                />
            </td>
            <ItemSubtotal subtotal={item.quantity * item.unitPrice}/>
            <ItemDelete handleDeleteItem={handleDeleteItem} index={index}/>
        </tr>
    )
}

export default BagItem