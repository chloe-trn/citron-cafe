import React from "react"
import { Helmet } from 'react-helmet'
import MenuContainer from "./MenuContainer/MenuContainer"
import './menu.css'
import Copyright from "../../components/Copyright"

const MenuPage = () => {

    return(
        <>  
            <Helmet>
                <title>Citron Café | Menu</title>
            </Helmet>
            <MenuContainer />
            <Copyright page="menu-page"/>
        </>
    )
}

export default MenuPage