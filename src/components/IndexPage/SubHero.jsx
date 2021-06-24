import React from "react"

function SubHero(props){
    return(
        <div className="sub-hero">
            <p id="sub-one">come and stay a while.</p>
            <p id="sub-two">relax and enjoy our quality menu items or order online and pickup in store.</p>
            <img src={props.img} alt="A table with a cup of coffee and a vase of flowers on it."/>
        </div>
    )
}

export default SubHero