import React from 'react'
import CheckOutForm from './CheckOutForm/CheckOutForm'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const PUBLIC_KEY = 'pk_test_51IUxkEASWaWP5VcCpkZih5iYsRlUqc5UhT2pVDne4eN33Ug3aXNML6p7FZeexkCYOBgm6zsomHuX6U5Df4Tq3hRm00BuPDZ4u8'
const  stripePromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm />
        </Elements>
    );
}

export default StripeContainer;
