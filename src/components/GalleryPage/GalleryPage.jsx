// import packages
import React from 'react'
import { Helmet } from 'react-helmet'
// import css
import './gallery.css'
// import components
import GalleryGrid from './GalleryGrid/GalleryGrid'
import Copyright from '../Copyright'
// import assets
import insta1 from '../../assets/gallery-img/img1.jpg'
import insta2 from '../../assets/gallery-img/img2.jpg'
import insta3 from '../../assets/gallery-img/img3.jpg'
import insta4 from '../../assets/gallery-img/img4.jpg'
import insta5 from '../../assets/gallery-img/img5.jpg'
import instaLogo from '../../assets/instagram.svg'

function GalleryPage(){
    
    const images = [insta1, insta2, insta3, insta4, insta5]

    return(
        <>
        <Helmet>
            <title>Citron Café | Gallery</title>
        </Helmet>
        <GalleryGrid images={images} instaLogo={instaLogo}></GalleryGrid>
        <Copyright />
        </>
    )
}

export default GalleryPage