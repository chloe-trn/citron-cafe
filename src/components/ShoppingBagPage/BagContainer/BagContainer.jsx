import React, { useContext, useState, useEffect }from 'react'
import BagHeadings from './BagHeadings'
import { BagContext, BagFunctionsContext } from "../../../App"
import BagItem from './BagItem/BagItem'
import BagTotal from './BagTotal'
import BagButtons from './BagButtons/BagButtons'

function BagContainer(){

    // global bag context
    const bag = useContext(BagContext)
    const {deleteBag} = useContext(BagFunctionsContext)
    const [total, setTotal] = useState(0)

    const handleClearBag = () => {
        deleteBag()
        setTotal(0)
    }

    const calcTotal = () => {
        const subtotals = []
        for(let i = 0; i < bag.length ; i++ ){
            const subtotal = bag[i].quantity * bag[i].unitPrice
            subtotals.push(subtotal) 
        }
        const total = subtotals.reduce((a, b) => a + b, 0)
        return total 
    } 

    useEffect(() => setTotal(calcTotal),[bag]) 

    return(
        <div className="bag-container">
            <BagHeadings />
            {
                bag.map((item,index) => 
                    <BagItem key={item+index} item={item} index={index}/>
                ) 
            }
            <BagTotal total={total}/>
            <BagButtons 
                total={total} 
                handleClearBag={handleClearBag}
            />
        </div>
    )
}

export default BagContainer