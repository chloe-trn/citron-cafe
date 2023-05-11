import React from 'react'

function Main(props){
    return(
        <main id='main' className={props.class}>
            {props.children}
        </main>
    )
}

export default Main