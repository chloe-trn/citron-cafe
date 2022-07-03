// import packages
import React from 'react'
// import components
import CheckOutButton from './CheckOutButton'
import DeleteBagButton from './DeleteBagButton'

function BagButtons(props) {
    return (
        <div className='bag-buttons'>
            {
                (props.total > 0) ?
                <>
                    <DeleteBagButton handleClearBag={props.handleClearBag} />
                    <CheckOutButton handleCheckOut={props.handleCheckOut} disabled={false}/>
                </>:
                <></>
            }
        </div>
    )
}

export default BagButtons