import React from "react"
import contactIcon from "../../assets/contact.svg"
import locationIcon from "../../assets/location.svg"
import hoursIcon from "../../assets/hours.svg"

function Info(){
    return(
        <section className="info" aria-label="Citron Café information">
            <h2 className="hidden">Café Information</h2> 
            <div className="cell" id="contact">
                <img src={contactIcon} alt="Contact icon"/>
                <h3 id="contact-heading">Contact</h3>              
                <address>
                citroncafe@email.com<br/>
                571 - 688 - 5498
                </address>
            </div>
            <div className="cell" id="location">
                <img src={locationIcon} alt="Location icon"/>
                <h3 id="location-heading">Location</h3>   
                <address>
                123 Street Court<br/>
                Washington, DC
                </address>
            </div>
            <div className="cell" id="hours">
                <img src={hoursIcon} alt="Hours icon"/>
                <h3 id="hours-heading">Hours</h3>
                <address>
                    Mon - Fri<br/>
                    6am - 4pm
                </address>  
            </div>
        </section>
    )
}

export default Info