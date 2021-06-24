import React from "react"
import { Link} from "react-router-dom"
import Copyright from "../Copyright"
import BagContainer from "./BagContainer/BagContainer"
import './shopping-bag.css'

function ShoppingBagPage(){
    return(
        <>
            <div className="shopping-bag">
                <Link to="/menu">
                    <input className="navigation-btn" id="menu-btn" type="button" value="« Back to Menu" />
                </Link>
                <div className="bag-outer-container">
                    <h2 className="mobile-h2">Shopping Bag</h2>
                    <BagContainer />  
                </div>
            </div> 
            <Copyright />
        </>
    )
}

export default ShoppingBagPage