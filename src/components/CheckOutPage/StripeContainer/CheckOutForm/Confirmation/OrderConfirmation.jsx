import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import './confirmation.css'
import { BagFunctionsContext } from "../../../../../App"

function OrderConfirmation() {
    const {deleteBag} = useContext(BagFunctionsContext)
    const handleClick = () => deleteBag()
    
    return (
        <div className="confirm-outer-container">
            <div className="confirm-inner-container">
                <p>Your order has been confirmed for pickup ㋡</p>
                <p>It'll be ready in 15 - 20 minutes at 123 Street Court, Washington DC.</p>
                <p>See you soon!</p>
            </div>
            <Link to="/">
                <input 
                    id="home-btn"
                    type="button" 
                    onClick={handleClick}   
                    className="navigation-btn"
                    value="Go to Home »"
                />
            </Link>
        </div>
    );
}

export default OrderConfirmation;