// import packages
import React from 'react'

function CustomerName() {
    return (
        <div className='name'>
            <label htmlFor='fname'>First Name:</label>
            <input className='check-out-input' type='text' id='fname' name='fname' required/>
            <label htmlFor='lname'>Last Name:</label>
            <input className='check-out-input' type='text' id='lname' name='lname'  required/>
        </div>
    )
}

export default CustomerName