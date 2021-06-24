import React from "react"
import "./gallery.css"
import GalleryGrid from "./GalleryGrid/GalleryGrid"
import Copyright from "../Copyright"

// import all images 
import insta1 from "../../assets/gallery-img/img1.jpg"
import insta2 from "../../assets/gallery-img/img2.jpg"
import insta3 from "../../assets/gallery-img/img3.jpg"
import insta4 from "../../assets/gallery-img/img4.jpg"
import insta5 from "../../assets/gallery-img/img5.jpg"
import instaLogo from "../../assets/instagram.svg"

function GalleryPage(){
    
    const images = [insta1, insta2, insta3, insta4, insta5]

    return(
        <React.Fragment>
            <GalleryGrid images={images} instaLogo={instaLogo}></GalleryGrid>
            <Copyright />
        </React.Fragment>
    )
}

export default GalleryPage