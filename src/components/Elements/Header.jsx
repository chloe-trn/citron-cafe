import React from 'react'

function Header(props){
    return(
        <header id='header' className={props.class}>
            {props.children}
        </header>
    )
}

export default Header