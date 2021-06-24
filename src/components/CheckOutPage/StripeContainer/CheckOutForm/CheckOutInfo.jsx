import React from 'react';

function CheckOutInfo() {
    return (
        <div className="checkout-info">
            <p className="testing-label"><b>For testing purposes, use this information:</b></p>
            <p><b>Name:</b> John Doe</p>
            <p><b>Phone Number:</b> 517-942-2404</p>
            <p><b>Card Number:</b> 4242 4242 4242 4242</p>
            <p><b>Expiration Date:</b> Any MM/YY in the future</p>
            <p><b>CSV:</b> Any 3 numbers</p>
        </div>
    );
}

export default CheckOutInfo;