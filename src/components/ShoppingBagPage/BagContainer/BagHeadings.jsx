import React from 'react'

function BagHeadings() {
    return (
        <div className="bag-headings">
            <div className="item-info-headings">
                <h2 className="bag-h2 item-h2">Item</h2>
                <h2 className="bag-h2">Unit Price</h2>
                <h2 className="bag-h2">Quantity</h2>
                <h2  className="bag-h2">Subtotal</h2>
            </div>
            <h2>Delete</h2>
        </div>
    )
}

export default BagHeadings