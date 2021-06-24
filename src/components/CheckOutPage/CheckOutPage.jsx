import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { BagContext } from "../../App"
import './check-out.css'
import StripeContainer from './StripeContainer/StripeContainer';

function CheckOutPage() {

    const bag = useContext(BagContext)
    
    if (bag.length < 1){
        return <Redirect to='/' />;
    }

    return (
        <>
            <div className="check-out-container">
            <StripeContainer />
            </div>
        </>
    );
}

export default CheckOutPage