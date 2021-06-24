import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

import CustomerName from './CustomerName'
import PhoneNumber from './PhoneNumber'
import Summary from './Summary'
import CheckOutInfo from './CheckOutInfo'
import OrderConfirmation from './Confirmation/OrderConfirmation'

function CheckOutForm() {
    
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    // verify card payment with Stripe.js through an axios API call through Node server on form submit 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("/order-confirmed", {
                    message: 'Stripe Payment Method Successfully Created',
                    id: id
                })
                if(response.data.success) {
                    setSuccess(true)
                }
            } catch (error) {
                console.log("This is a server side error", error)
            }
        } else {
            console.log("There is a client side error",error.message)
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