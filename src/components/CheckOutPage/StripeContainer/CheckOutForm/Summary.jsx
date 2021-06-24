import React, { useContext, useEffect, useState } from 'react'
import { BagContext, BagFunctionsContext } from "../../../../App"

function Summary() {

    // use bag contexts to get current bag state and functions
    const bag = useContext(BagContext)
    const { getTotalQuantity } = useContext(BagFunctionsContext)

    const [totalBagItems, setTotalBagItems] = useState(0)
    const [prices, setPrices] = useState({
        subtotal: 0, 
        tax: 0, 
        total: 0
    })
    const { subtotal, tax, total } = prices 

    const calcSubtotal = () => {
        const subtotals = []
        for(let i = 0; i < bag.length ; i++ ){
            const subtotal = bag[i].quantity * bag[i].unitPrice
            subtotals.push(subtotal) 
        }
        const total = subtotals.reduce((a, b) => a + b, 0)
        return total
    } 

    // calculate summary of order on first render
    useEffect(() => {
        setTotalBagItems(getTotalQuantity)
        const subtotal = calcSubtotal()
        const tax = subtotal * 0.05
        const total = subtotal + tax
        setPrices({
            subtotal: subtotal.toFixed(2), 
            tax: tax.toFixed(2), 
            total: total.toFixed(2)
        })
    }, [])

    return (
        <table className="summary-table">
            <tr>
                <td>Items [{totalBagItems}]</td>
                <td className="col-two">$ {subtotal}</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td className="col-two">$ {tax}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td className="col-two">$ {total}</td>
            </tr>
        </table>
    );
}

export default Summary;