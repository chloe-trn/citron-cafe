import React from "react"
import "./index.css"
import SubHero from "./SubHero"
import Info from "./Info"
import Newsletter from "./Newsletter"
import Hero from "./Hero"

// import hero slider images 
import image1 from "../../assets/main-img/img1.jpg"
import image2 from "../../assets/main-img/img2.jpg"
import image3 from "../../assets/main-img/img3.jpg"
import image4 from "../../assets/main-img/img4.jpg"
import image5 from "../../assets/main-img/img5.jpg"
import image6 from "../../assets/main-img/img6.jpg"

function IndexPage(props){

    const images = [image1,image2,image3,image4,image5,image1]
    
    return(
        <>
        <main>
           <Hero images={images}/>
           <SubHero img={image6}/>
           <Info />
           <Newsletter />
        </main>
        <footer id="index-copyright">Citron Café 2020</footer>
        </>
    )
}

export default IndexPage