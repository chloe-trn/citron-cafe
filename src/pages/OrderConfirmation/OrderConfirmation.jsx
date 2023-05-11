// import packages
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import contexts
import { BagContext } from '../../App'
import { BagFunctionsContext } from '../../App'
// import css
import './confirmation.css'

function OrderConfirmation() {
    
    const bag = useContext(BagContext)  
    const {deleteBag} = useContext(BagFunctionsContext)

    const handleClick = () => deleteBag()

    useEffect(() => {
        // consolidate purchase information
        let items = {}
        let quantity = {}

        for(const item of bag) {
            items[item.item] = item.itemID
            quantity[item.item] = item.quantity   
        }

        let purchaseInfo = { 
            items: items, 
            quantity: quantity
        }

        // send a request to add the information to the database
        fetch("http://localhost:5000/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseInfo),
        })
        .then(res => {
            //  checks if the request is successful, then extracts the JSON data from body
            //. if not successful, it rejects the promise with the JSON data as the reason for the rejection
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({ message }) => {
            console.log(message)
        })
        .catch(e => {
            console.error(e.error)
        })
    }, [])
     
    return (
        <div className='confirm-outer-container'>
            <section className='confirm-inner-container'>
                <p>Your order has been confirmed for pickup ㋡</p>
                <p>It'll be ready in 15 - 20 minutes at 123 Street Court, Washington DC.</p>
                <p>See you soon!</p>
            </section>
            <Link 
                to='/'
                id='home-btn' 
                className='navigation-btn'
                onClick={handleClick} 
            >
            Go to Home »
            </Link>
        </div>
    )
}

export default OrderConfirmation