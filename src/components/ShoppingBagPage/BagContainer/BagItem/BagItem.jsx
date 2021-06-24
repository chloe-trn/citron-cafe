import React, { useContext, useState, useEffect } from 'react'
import ItemName from './ItemName'
import ItemPrice from './ItemPrice'
import ItemQuantity from '../../../ItemQuantity'
import { BagFunctionsContext } from "../../../../App"
import ItemSubtotal from './ItemSubtotal'
import ItemDelete from './ItemDelete'

function BagItem({item,index}) {

    const {handleQuantityChange, deleteItem} = useContext(BagFunctionsContext)
    const [quantity, setQuantity] = useState(item.quantity)

    const handleInputQuantityChange = e => setQuantity(e.target.value)

    const handleDeleteItem = () => deleteItem(index)

    useEffect(() => {
        if (item.quantity !== quantity){
            handleQuantityChange(item.item,parseInt(quantity),'bag')
        }
    },[quantity])

    return (
        <div className="bag-item">
            <div className="item-info">
                <ItemName name={item.item}/>
                <ItemPrice price={item.unitPrice} />
                <div className="bag-quantity">
                    <span>Quantity: </span>
                    <ItemQuantity 
                        quantity={quantity} 
                        handleInputQuantityChange={handleInputQuantityChange}
                        style={{
                            
                        }}
                    />
                </div>
                <ItemSubtotal subtotal={item.quantity * item.unitPrice}/>
            </div>
            <ItemDelete handleDeleteItem={handleDeleteItem} index={index}/>
        </div>
    )
}

export default BagItem