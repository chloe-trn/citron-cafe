// import packages
import React from 'react'

function CheckOutInfo() {
    return (
        <div className='checkout-info'>
            <p className='testing-label'><strong>For testing purposes, use this information to check out:</strong></p>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Phone Number:</strong> 517-942-2404</p>
            <p><strong>Card Number:</strong> 4242 4242 4242 4242</p>
            <p><strong>Expiration Date:</strong> Any MM/YY in the future</p>
            <p><strong>CSV:</strong> Any 3 numbers</p>
        </div>
    )
}

export default CheckOutInfo