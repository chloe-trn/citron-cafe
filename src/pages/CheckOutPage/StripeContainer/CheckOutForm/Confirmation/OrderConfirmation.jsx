// import packages
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import contexts
import { BagFunctionsContext } from '../../../../../App'
// import css
import './confirmation.css'

function OrderConfirmation() {
    
    const {deleteBag} = useContext(BagFunctionsContext)
    const handleClick = () => deleteBag()
    
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