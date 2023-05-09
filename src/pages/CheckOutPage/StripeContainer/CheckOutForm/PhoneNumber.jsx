// import packages
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'

function PhoneNumber() {
    const [value, setValue] = useState()
    return (
        <>
        <label htmlFor='phone'>Phone Number:</label><br/>
        <PhoneInput
        id='phone'
        country='US'
        value={value}
        onChange={setValue}
        required />
        </>
    )
}

export default PhoneNumber