import React from 'react'

function BagTotal(props) {
    return (
        <div className="bag-total">
            <h2 id="total-label">Total</h2>
            <span className="total-price">$ {props.total}</span>
        </div>
    )
}

export default BagTotal