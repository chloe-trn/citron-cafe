import React from "react"

function MobileMenu(props){
    return(
        <div className="hamburger" onClick={props.onClick}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    )
}

export default MobileMenu