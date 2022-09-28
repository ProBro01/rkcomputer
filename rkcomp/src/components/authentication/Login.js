import React from 'react'
// components
import { Input } from '../utility/Input.js'
import { Button } from '../utility/Button.js'
import { AiOutlineGoogle } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
// hooks
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
// actions
import { loginuserinfoaction, userloginaction } from "../../action/userinfoaction.js"

export const Login = () => {

    const [isSigningIn, setSigningIn] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordInputType, setpasswordInputType] = useState(true)

    const navigator = useNavigate()
    const dispatch = useDispatch()

    function checkFilledCred() {
        var hasemailCorrect = false
        var haspassword = true
        if (email.length > 0) {
            var isValidEmail = /^\w([.-]?\w+)*@\w+([.-]?\w+)*([.]\w{2,3})+$/.test(email)
            if (isValidEmail) {
                setEmailError('')
                hasemailCorrect = true
            }
            else {
                setEmailError('*invalid email')
                hasemailCorrect = false
            }
        }
        else {
            setEmailError('*field cannot be empty')
            hasemailCorrect = false
        }
        if (password.length === 0) {
            setPasswordError('*field cannot be empty')
            haspassword = false
        }
        else {
            setPasswordError('')
            haspassword = true
        }
        if (hasemailCorrect && haspassword) {
            return true
        }
        else {
            return false
        }
    }

    async function requestLogin(event) {
        event.preventDefault()
        if (checkFilledCred()) {
            setSigningIn(true)
            await fetch("http://127.0.0.1/auth/login").then((data) => {
                setSigningIn(false)
                return data.json()
            }).then((data) => {
                if(data.status === 'success'){
                    dispatch(loginuserinfoaction('setloginuserinfo', data))
                    dispatch(loginuserinfoaction('setlogin'))
                    navigator('/')
                }
                else{
                    // handle this with an error popup
                    alert('Error')
                }
            }).catch((err) => {
                setSigningIn(false)
                console.log(err)
            })
        }
    }

    return (
        <>
            <div className='login-form'>
                <h1 className='heading'>Sign In</h1>
                <div className='input_field_container'>
                    <Input type="text" placeholder="Email" className="input-field" onChange={(event) => {
                        setemail(event.target.value)
                    }} />
                    <p className='input__error'>{emailError}</p>
                </div>
                <div className='input_field_container'>
                    <Input type={passwordInputType ? "password" : "text"} placeholder="Password" className="input-field" onClick={(event) => {
                        setpasswordInputType(!passwordInputType)
                    }} onChange={(event) => {
                        setpassword(event.target.value)
                    }}>
                        {passwordInputType ? <AiFillEyeInvisible className='input__icon' /> : <AiFillEye className='input__icon' />}
                    </Input>
                    <p className='input__error'>{passwordError}</p>
                </div>
                <div className='login__form-button-cont'>
                    {
                        isSigningIn ?
                            <Button type={'blue-btn'} inner={'Loading...'} /> :
                            <Button type={'blue-btn'} inner={"Sign in"} onClick={requestLogin} />
                    }
                    <Link to="/auth/signup">
                        <Button type={'bordered-blue'} inner={"Sign up"} />
                    </Link>
                </div>
                <div className='login__form-fogot-pass'>
                    <p>Forgot password?</p>
                </div>
                <div className='login-form-signin-opt-head'>
                    --Sign in with--
                </div>
                <div className='login__form-sign-in'>
                    <a href="http://localhost/auth/googlelogin" target={"_blank"}>
                        <button className='google-button'>
                        <span>
                            <AiOutlineGoogle />
                        </span>Google
                    </button>
                        </a>
                    <button className='facebook-button'>
                        <span>
                            <FaFacebookF />
                        </span>Facebook
                    </button>
                </div>
            </div>
        </>
    )
}
