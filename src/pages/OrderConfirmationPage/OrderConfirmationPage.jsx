// import packages
import React from 'react'
import { Helmet } from 'react-helmet'
// import components
import Main from '../../components/Elements/Main'
import OrderConfirmation from  './OrderConfirmation'
import Copyright from '../../components/Copyright'

function OrderConfirmationPage(){

    return(
        <>
        <Helmet>
            <title>Citron Café | Gallery</title>
        </Helmet>
        <Main>
            <OrderConfirmation />
        </Main>
        <Copyright />
        </>
    )
}

export default OrderConfirmationPage