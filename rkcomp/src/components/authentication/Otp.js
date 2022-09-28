import React from 'react'
// hooks
import { useState } from 'react'
// component
import { Input } from '../utility/Input.js'
import { Button } from '../utility/Button.js'

export const Otp = () => {

    const [otp, setOTP] = useState('')

    function isNumericInput(event) {
        var otp = event.target.value
        if (otp.length === 0) {
            setOTP('')
        }
        else {
            var lastdigit = otp.charCodeAt(otp.length - 1)
            if (lastdigit >= 48 && lastdigit <= 57) {
                setOTP(otp)
            }
        }
    }

    function requestVerifyOTP(event) {

    }

    return (
        <div className='login-form'>
            <Input className='input-field' placeholder="Enter OTP..." type="password" onChange={isNumericInput} value={otp} />
            <Button type="blue-btn" onClick={requestVerifyOTP} inner={"Verify"} />
        </div>
    )
}
