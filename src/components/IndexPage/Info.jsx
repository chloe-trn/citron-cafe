import React from "react"

function Info(){
    return(
        <section className="info" aria-label="Citron Café information">
            <div className="cell" id="contact" aria-labelledby="contact-heading">
                <h2 id="contact-heading">Contact</h2>
                <p>citroncafe@email.com</p>
                <p>571 - 688 - 5498</p>
            </div>
            <div className="cell" id="location" aria-labelledby="location-heading">
                <h2 id="location-heading">Location</h2>
                <p>123 Street Court</p>
                <p>Washington, DC</p>
            </div>
            <div className="cell" id="hours" aria-labelledby="hours-heading">
                <h2 id="hours-heading">Hours</h2>
                <p>Mon - Fri</p>
                <p>6am - 4pm</p>
            </div>
        </section>
    )
}

export default Info