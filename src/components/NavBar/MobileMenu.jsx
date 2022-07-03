// import packages
import React from 'react'

function MobileMenu(props){
    return(
        <button className='hamburger' aria-label='Open/close menu button' onClick={props.onClick}>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
        </button>
    )
}

export default MobileMenu