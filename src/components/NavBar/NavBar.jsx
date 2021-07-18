import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation} from "react-router-dom"
import bagIcon from "../../assets/shopping-bag.svg"

import BrandLogo from "./BrandLogo"
import MobileMenu from "./MobileMenu"
import Banner from "./Banner"

function NavBar({bagNum, widthRef}){

    // gets url path and determine which nav bar is displayed
    const {pathname} = useLocation()
    const normalNavPaths = [ '/', '/gallery', '/menu','/shopping-bag']

    // determines if mobile menu is displayed
    const [displayMobileMenu, setDisplayMobileMenu] = useState({
        status: false, 
        count: 0
    }); 
    
    // const [navStyle, setNavStyle] = useState({visibility:"visible"})
    const { status, count } = displayMobileMenu; 
    const navRef = useRef(null)

    const handleMobileMenuClick = () =>{
        const prevStatus = status
        const prevCount = count
        setDisplayMobileMenu({
            status: !prevStatus, 
            count: prevCount + 1
        })
    }

    useEffect(() => {
        const windowResize = () => handleWindowResize()
        widthRef.current = navRef.current.clientWidth
        window.addEventListener('resize',windowResize)
        return () => window.removeEventListener('resize', windowResize)
    },[widthRef])

    const handleWindowResize = () => widthRef.current =navRef.current.clientWidth

    return(
        <header>
        {
            normalNavPaths.includes(pathname) ?
            <>
            <Banner/>
            <nav className="navbar" ref={navRef}>
                <BrandLogo />
                <MobileMenu onClick={handleMobileMenuClick}/>              
                <ul className={ status ? "nav-ul nav-ul-open" : (window.innerWidth < 768 && count > 0) ? "nav-ul nav-ul-hidden" : "nav-ul"}>
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/menu">Menu / Order Online</Link></li>
                    <li className="nav-item shopping-bag-links">
                    <Link className="nav-link" to="/shopping-bag">
                        <img id="bag-icon" src={bagIcon} alt="Shopping bag icon"/>
                    </Link>
                    <Link className="nav-link shopping-icon" to="/shopping-bag">
                        <div className={ bagNum > 0 ? "items items-filled" : "items items-empty" } >
                            {bagNum}
                        </div>
                    </Link>  
                </li>
                </ul>
            </nav>
            </> :  
            <nav className="navbar simple" ref={navRef}>
                <Link to="/">
                    <div className="navbar-brand">
                        <h1>citron café</h1>
                    </div>
                </Link> 
            </nav>
        }
        </header>
    )
}

export default NavBar