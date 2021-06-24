import React from 'react';

function ItemSubtotal(props) {
    return (
        <div className="bag-subtotal">
            <span>Subtotal: </span>
            {"$" + props.subtotal}
        </div>
    );
}

export default ItemSubtotal;