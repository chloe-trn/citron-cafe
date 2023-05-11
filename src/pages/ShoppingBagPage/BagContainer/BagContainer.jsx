// import packages
import React, { useContext, useState, useEffect }from 'react'
// import contexts
import { BagContext, BagFunctionsContext } from '../../../App'
// import components
import BagHeadings from './BagHeadings'
import BagItem from './BagItem/BagItem'
import MobileBagItem from './BagItem/MobileBagItem'
import BagTotal from './BagTotal'

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

    const handleClick = async () => {

        // consolidate purchase information
        let purchaseArray = bag.map(({ itemID, quantity }) => ({ itemID: parseInt(itemID), quantity }));
        let purchaseObject = {
            items: purchaseArray
        }

        fetch("https://citron-server.herokuapp.com/checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseObject),
          })
        .then(res => {
            //  checks if the request is successful, then extracts the JSON data from body
            //. if not successful, it rejects the promise with the JSON data as the reason for the rejection
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
            window.location = url
        })
        .catch(e => {
            console.error(e.error)
        })
    };


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
            <div className='bag-buttons'>
                {
                    (total > 0) ?
                    <>
                        <button id='delete-btn' className='bag-button' onClick={handleClearBag}>Clear Bag</button>
                        <button  id='check-out-btn' className='bag-button' disabled={false} onClick={handleClick}>Check out</button>
                    </>:
                    <></>
                }
            </div>
        </div>
    )
}

export default BagContainer