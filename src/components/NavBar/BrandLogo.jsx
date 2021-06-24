import React from "react"
import { Link } from "react-router-dom"

function BrandLogo(){
    return(
        <Link to="/">
            <div className="navbar-brand">
                <h1>citron café</h1>
            </div>
        </Link>
    )
}

export default BrandLogo