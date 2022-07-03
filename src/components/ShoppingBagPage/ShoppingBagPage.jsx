// import packages
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link} from 'react-router-dom'
// import css
import './shopping-bag.css'
// import components
import Copyright from '../Copyright'
import BagContainer from './BagContainer/BagContainer'

function ShoppingBagPage(){
    return(
        <>  
        <Helmet>
            <title>Citron Café | Shopping Bag</title>
        </Helmet>
        <main id='main' className='shopping-bag'>
            <Link to='/menu' className='navigation-btn' id='menu-btn'>« Back to Menu</Link>
            <section className='bag-outer-container'>
                <h2 className='hidden'>Shopping Bag</h2>
                <BagContainer />  
            </section>
        </main>
        <Copyright />
        </>
    )
}

export default ShoppingBagPage