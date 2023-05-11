// import packages
import React from 'react'
import { Helmet } from 'react-helmet'
// import css
import './index.css'
// import components
import Main from '../../components/Elements/Main'
import SubHero from './SubHero'
import Info from './Info'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Copyright from '../../components/Copyright'

// import hero slider images 
import image1 from '../../assets/main-img/img1.jpg'
import image2 from '../../assets/main-img/img2.jpg'
import image3 from '../../assets/main-img/img3.jpg'
import image4 from '../../assets/main-img/img4.jpg'
import image5 from '../../assets/main-img/img5.jpg'
import image6 from '../../assets/main-img/img6.jpg'

function IndexPage(){

    const images = [image1,image2,image3,image4,image5,image1]
    
    return(
        <>
        <Helmet>
            <title>Citron Café</title>
        </Helmet>
        <Main>
           <Hero images={images}/>
           <SubHero img={image6}/>
           <Info />
           <Newsletter />
        </Main>
        <Copyright class="index-copyright"/>
        </>
    )
}

export default IndexPage