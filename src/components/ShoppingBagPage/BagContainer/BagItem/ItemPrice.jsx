import React from 'react';

function ItemPrice(props) {
    return (
        <div className="bag-unit-price">
            <span>Unit Price: </span>
            {"$ " + props.price}
        </div>
    );
}

export default ItemPrice;