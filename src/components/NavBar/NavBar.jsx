// import packages
import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation} from 'react-router-dom'
// import components
import Header from '../Elements/Header'
import BrandLogo from './BrandLogo'
import MobileMenu from './MobileMenu'
import Banner from './Banner'
// import assets
import bagIcon from '../../assets/shopping-bag.svg'

function NavBar({bagNum, widthRef}){

    // gets url path and determine which nav bar is displayed
    const {pathname} = useLocation()
    const normalNavPaths = [ '/', '/gallery', '/menu','/shopping-bag']

    // determines if mobile menu is displayed
    const [displayMobileMenu, setDisplayMobileMenu] = useState({
        status: false, 
        count: 0
    })
    
    const { status, count } = displayMobileMenu
    const navRef = useRef(null)

    // open/close mobile menu on hamburger button click
    const handleMobileMenuClick = () =>{
        const prevStatus = status
        const prevCount = count

        setDisplayMobileMenu({
            status: !prevStatus, 
            count: prevCount + 1
        })
    }

    // close mobile menu on every link click
    const handleMenuLinkClick = () =>{
        const prevStatus = status
        const prevCount = count

        setDisplayMobileMenu({
            status: !prevStatus, 
            count: prevCount
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
        <>
            <Banner/>
            <Header>
            {
                normalNavPaths.includes(pathname) ?
                <>
                <nav className='navbar' ref={navRef}>
                    <BrandLogo />
                    <MobileMenu onClick={handleMobileMenuClick}/>              
                    <ul className={ status ? 'nav-ul nav-ul-open' : (window.innerWidth < 768 && count > 0) ? 'nav-ul' : 'nav-ul'}>
                        <li className='nav-item' onClick={handleMenuLinkClick}><Link className='nav-link' to='/'>Home</Link></li>
                        <li className='nav-item' onClick={handleMenuLinkClick}><Link className='nav-link' to='/gallery'>Gallery</Link></li>
                        <li className='nav-item' onClick={handleMenuLinkClick}><Link className='nav-link' to='/menu'>Menu / Order Online</Link></li>
                        <li className='nav-item shopping-bag-links' onClick={handleMenuLinkClick}>
                            <Link className='nav-link' to='/shopping-bag'>
                                <img id='bag-icon' src={bagIcon} alt='Shopping bag icon'/>
                                <div className={ bagNum > 0 ? 'items items-filled' : 'items items-empty' } >
                                    {bagNum}
                                </div>
                            </Link>         
                        </li>
                    </ul>
                </nav>
                </> :  
                <nav className='navbar simple' ref={navRef}>
                    <Link to='/'>
                        <div className='navbar-brand'>
                            <h1>citron café</h1>
                        </div>
                    </Link> 
                </nav>
            }
            </Header>
        </>
    )
}

export default NavBar