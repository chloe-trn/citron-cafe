import React from "react"

function SubHero(props){
    return(
        <section className="sub-hero" aria-labelledby="sub-one" aria-describedby="sub-two">
            <p id="sub-one">come and stay a while.</p>
            <p id="sub-two">relax and enjoy our quality menu items or order online and pickup in store.</p>
            <img src={props.img} alt="A table with a cup of coffee and a vase of flowers on it."/>
        </section>
    )
}

export default SubHero