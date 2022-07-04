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
    const [invalidQuantity, setInvalidQuantity] = useState(false)

    const handleInputQuantityChange = (e) => {
        let input = parseInt(e.target.value)
        if ( input === "" || input === "0" || isNaN(input)) {
            setInvalidQuantity(true)
            setQuantity(e.target.value)
        } else {
            setInvalidQuantity(false)
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
        <tbody>
            <tr>
                <th><strong>Item: </strong></th>
                <ItemName name={item.item}/> 
            </tr>
            <tr>
                <th><strong>Unit Price: </strong></th>
                <ItemPrice price={item.unitPrice} />
            </tr>
            <tr>
                <th><strong>Quantity: </strong></th>
                <td className='bag-quantity'>
                    <ItemQuantity 
                        itemID={item.item}
                        quantity={quantity} 
                        handleInputQuantityChange={handleInputQuantityChange}
                    />
                    <p className={!invalidQuantity ? 'quantity-error' : 'quantity-error true'}>Please input a valid quantity</p>
                </td>
            </tr>
            <tr>
                <th><strong>Subtotal: </strong></th>
                <ItemSubtotal subtotal={item.quantity * item.unitPrice}/>
            </tr>
            <tr className='mobile-delete'>
                <ItemDelete handleDeleteItem={handleDeleteItem} index={index}/>
            </tr>
        </tbody>
    )
}

export default BagItem