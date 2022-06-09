import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { BagContext } from "../../../../App"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

import CustomerName from './CustomerName'
import PhoneNumber from './PhoneNumber'
import Summary from './Summary'
import CheckOutInfo from './CheckOutInfo'
import OrderConfirmation from './Confirmation/OrderConfirmation'

function CheckOutForm() {

    const bag = useContext(BagContext)  
    const stripe = useStripe()
    const elements = useElements()
    const [success, setSuccess] = useState(false)

    // verify card payment with Stripe.js through an axios API call through Node server on form submit 
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault()

        // consolidate form and purchase information
        let items = {};
        let quantity = {}; 

        for(const item of bag) {
            items[item.item] = item.itemID;
            quantity[item.item] = item.quantity   
        }
       
        let purchaseInfo = {
            firstName: e.target[1].value,
            lastName: e.target[2].value, 
            phoneNumber: e.target[3].value, 
            items: items, 
            quantity: quantity
        }

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

         // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if(!error) { 
            // if stripe API gives a non-error response, send a message to the server
            // store transaction in database 
            try {
                const response = await axios.post("/purchase", purchaseInfo)
                if(response.data.message === 'Purchase received') {
                    setSuccess(true)
                }
            } catch (error) {
                console.log("This is a server side error", error)
            }
        } else {
            console.log("There is a client side error", error.message)
        }
    
    }

    return (
        <>
        { !success?
            <form id="form" onSubmit={handleSubmit}>
                <div className="left"> 
                    <Link to="/shopping-bag" aria-label="Back to Bag">
                        <button className="navigation-btn" id="go-to-bag">« Back to Bag</button>
                    </Link>
                    <CheckOutInfo />
                    <h2>Your Information</h2>      
                    <CustomerName />
                    <PhoneNumber />
                    <h2>Payment</h2> 
                    <label htmlFor="card">Credit Card:</label>
                    <CardElement id="card"/>           
                </div>
                <div className="right">
                    <div className="summary"> 
                        <h2 id="summary-heading">Summary</h2> 
                        <Summary />
                        <button type="submit" >Confirm Order</button>
                    </div>
                </div>
            </form>
            : <OrderConfirmation />}
        </>
    );
}

export default CheckOutForm;