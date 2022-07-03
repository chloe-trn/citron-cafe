// import packages
import React, { useContext, useState, useEffect }from 'react'
// import contexts
import { BagContext, BagFunctionsContext } from '../../../App'
// import components
import BagHeadings from './BagHeadings'
import BagItem from './BagItem/BagItem'
import MobileBagItem from './BagItem/MobileBagItem'
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
        <div className='bag-container'>
            <table className='desktop-bag'>
                <thead>
                    <tr className='bag-headings'>
                        <BagHeadings />
                    </tr>
                </thead>
                <tbody>
                {
                    bag.map((item,index) => 
                        <BagItem key={item+index} item={item} index={index}/>
                    ) 
                } 
                </tbody>   
            </table>
            <table className='mobile-bag'>
                {
                    bag.map((item,index) => 
                        <MobileBagItem key={item+index} item={item} index={index}/>
                    ) 
                } 
            </table>
            <BagTotal total={total}/>
            <BagButtons 
                total={total} 
                handleClearBag={handleClearBag}
            />
        </div>
    )
}

export default BagContainer