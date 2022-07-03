// import packages
import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import css
import 'react-lazy-load-image-component/src/effects/opacity.css'

function GalleryGrid({images, instaLogo}){
    
    const handleInstaPostClick = () => {
        alert("Clicking on the instagram logo would lead to the post of the image. This is a test site so no instagram account is available.")
    }
    const handleInstaHandleClick = () => {
        alert("Clicking here would lead to Citron Cafe's instagram page. This is a test site so no instagram account is available.")
    }
    return(
        <main id='main' className='gallery-container'>
            <h2><Link to='#' onClick={handleInstaHandleClick}>@citron-cafe.co</Link></h2>
            <section className='gallery'>
                <ul>
                {
                    images.map((image,index) => 
                        <li className={'post img'+(index+1)} key={image}>
                            <Link to='#' onClick={handleInstaPostClick}>
                                <div className='insta-overlay'>
                                    <LazyLoadImage effect='opacity' className='insta-logo' src={instaLogo} alt='Instagram logo'/>
                                </div>
                                <LazyLoadImage effect='opacity' className={'gallery-img img'+(index+1)} src={image} alt=''/>
                            </Link>
                        </li>
                    )
                }
                </ul>
            </section>
        </main>
    )
}

export default GalleryGrid