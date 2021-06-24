import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Hero(props) {
    return (
        <div className="hero">
        <p>welcome.</p>
        <Carousel 
            showArrows={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            interval={3500}
            showStatus={false}
            showThumbs={false}
        >
                <div>
                    <LazyLoadImage src={props.images[0]} effect="opacity" alt="" />
                </div>
                <div>
                    <img src={props.images[1]} alt=""/>
                </div>
                <div>
                    <img src={props.images[2]} alt=""/>
                </div>
                <div>
                    <img src={props.images[3]} alt=""/>
                </div>
                <div>
                    <img src={props.images[4]} alt=""/>
                </div>
        </Carousel>
        </div>
    )
}

export default Hero
