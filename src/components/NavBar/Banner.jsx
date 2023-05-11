// import packages
import React from 'react'

function Banner(props){
    return(
        <aside className={props.class}>
            <p>
                { props.decor ? <span className='decoration'>✧*･ﾟ✧</span>: <></> }
                {props.text}
                { props.decor ? <span className='decoration'>✧*･ﾟ✧</span>: <></> }
            </p>
        </aside>
    )
}

export default Banner