import React from "react"
import { Link } from "react-router-dom"

function BrandLogo(){
    return(
        <Link to="/" className="navbar-brand">
            <h1>citron café</h1>
        </Link>
    )
}

export default BrandLogo