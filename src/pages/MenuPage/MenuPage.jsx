import React from "react"
import { Helmet } from 'react-helmet'
import Main from "../../components/Elements/Main"
import MenuContainer from "./MenuContainer/MenuContainer"
import Copyright from "../../components/Copyright"
import './menu.css'

const MenuPage = () => {

    return(
        <>  
            <Helmet>
                <title>Citron Café | Menu</title>
            </Helmet> 
            <Main class="menu-container">
                <MenuContainer />
            </Main>
            <Copyright page="menu-page"/>
        </>
    )
}

export default MenuPage