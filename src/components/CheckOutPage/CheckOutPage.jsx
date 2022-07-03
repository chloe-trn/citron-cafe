// import packages
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
// import contexts
import { BagContext } from '../../App'
// import css 
import './check-out.css'
// import components
import StripeContainer from './StripeContainer/StripeContainer'

function CheckOutPage() {

    const bag = useContext(BagContext)
    
    // return to homepage if checkout page is accessed with nothing in shopping bag
    if (bag.length < 1){
        return <Redirect to='/' />
    }

    return (
        <>
        <Helmet>
            <title>Citron Café | Check Out</title>
        </Helmet>
        <main id='main' className='check-out-container'>
        <StripeContainer />
        </main>
        </>
    )
}

export default CheckOutPage