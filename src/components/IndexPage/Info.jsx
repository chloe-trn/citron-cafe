import React from "react"

function Info(){
    return(
        <div className="info">
            <div className="cell" id="contact">
                <h2>Contact</h2>
                <p>citroncafe@email.com</p>
                <p>571 - 688 - 5498</p>
            </div>
            <div className="cell" id="location">
                <h2>Location</h2>
                <p>123 Street Court</p>
                <p>Washington, DC</p>
            </div>
            <div className="cell" id="hours">
                <h2>Hours</h2>
                <p>Mon - Fri</p>
                <p>6am - 4pm</p>
            </div>
        </div>
    )
}

export default Info