import React from 'react'
// components
import { Link } from 'react-router-dom'
import { Input } from "../utility/Input.js"
import { Button } from '../utility/Button.js'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
// stylesheets
import "../../stylesheets/signup.css"
import "../../stylesheets/login.css"
// hooks
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// actions
import { setusernameAction, setemailAction, setphoneAction } from "../../action/authactions.js"

export const Signup = () => {
  /*
    username field
    email field
    password field - contain the button to show password
    confirm password field - contain the button to show password\
    phone : text field
    signup button
  */
  /*
     isfield empty
     is data correct
  */
  /*
    add functionality to auto generate the password
  */

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [emailError, setemailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [showloading, setShowloading] = useState(false)
  const [passwordInputType, setpasswordInputType] = useState(true)
  const [confirmpassInputType, setconfirmpassInputType] = useState(true)

  const ipaddress = useSelector(state => state.ipAddressReducer)
  const dispatch = useDispatch()
  const navigator = useNavigate()

  async function requestSignUp(event) {
    try {
      var isvalidusername = validateUsername()
      var isvalidphone = validatePhone()
      var isvalidEmail = validateEmail()
      var isvalidpassword = validatePassword()
      if (isvalidusername && isvalidphone && isvalidEmail && isvalidpassword) {
        // todo: request for registering the user
        // email, phone, username, password
        setShowloading(true)
        var data = await fetch(ipaddress + '/auth/signup', {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            username,
            password,
            email,
            phone
          })
        }).then((data) => {
          return data.json()
        }).then((data) => {
          setShowloading(false)
          navigator('/', { replace: true })
          return data
        })
      }
    }
    catch (err) {
      // todo: implement the Error popup to show error
      console.log(err)
    }
  }

  function validateUsername() {
    if (username.length > 0) {
      return true
    }
    else {
      setUsernameError('*field cannot be empty')
      return false
    }
  }

  function validatePhone() {
    if (phone.length > 0) {
      var isValidPhone = /^[0-9]{10}$/.test(phone)
      // call the warning function for phone number
      if (!isValidPhone) {
        setPhoneError('*invalid phone number')
      }
      return isValidPhone
    }
    else {
      setPhoneError('*field cannot be empty')
      return false
    }
  }

  function validateEmail() {
    if (email.length > 0) {
      var isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*([.]\w{2,3})+$/.test(email)
      // var isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      // call the warning function for email
      if (!isValidEmail) {
        setemailError('*invalid email id')
      }
      return isValidEmail
    }
    else {
      setemailError('*field cannot be empty')
      return false
    }
  }

  function passwordTracker(event) {
    // todo: complete this function to check the strength of the password
    setpassword(event.target.value)
  }

  function validatePassword() {
    var hasUppercase = false
    var hasLowercase = false
    var hasSpecialCharater = false
    var hasnumericCharater = false
    if (password.length > 8) {
      for (var i = 0; i < password.length; i++) {
        var characterCode = password.charCodeAt(i)
        if ((characterCode >= 33 && characterCode <= 47) ||
          (characterCode >= 58 && characterCode <= 64) ||
          (characterCode >= 91 && characterCode <= 96) ||
          (characterCode >= 123 && characterCode <= 126)) {
          hasSpecialCharater = true
        }
        else if (characterCode >= 48 && characterCode <= 57) {
          hasnumericCharater = true
        }
        else if (characterCode >= 65 && characterCode <= 90) {
          hasUppercase = true
        }
        else if (characterCode >= 97 && characterCode <= 122) {
          hasLowercase = true
        }
      }
      if (hasLowercase && hasUppercase && hasSpecialCharater && hasnumericCharater) {
        return true
      }
      else {
        // call the warning function for password
        setpasswordError('*lowercase, uppercase, special and numeric Characters missing')
        return false
      }
    }
    else {
      // call the warning function for password
      setpasswordError('*password length must be greater than 8')
      return false
    }
  }

  return (
    <>
      <div className='login-form'>
        <h1 className='heading'>Sign Up</h1>
        <div className='input_field_container'>
          <Input type={"text"} placeholder={"Username"} className={"input-field"} onChange={(event) => {
            setUsername(event.target.value)
          }} />
          <p className='input__error'>{usernameError}</p>
        </div>
        <div className='input_field_container'>
          <Input type={passwordInputType ? "password" : "text"} placeholder={"Password"} className={"input-field"} onClick={(event) => {
            setpasswordInputType(!passwordInputType)
          }} onChange={passwordTracker}>
            {passwordInputType ? <AiFillEyeInvisible className='input__icon' /> : <AiFillEye className='input__icon' />}
          </Input>
          <p className='input__error'>{passwordError}</p>
        </div>
        <div className='input_field_container'>
          <Input type={confirmpassInputType ? "password" : "text"} placeholder={"Confirm Password"} className={"input-field"} onClick={(event) => {
            setconfirmpassInputType(!confirmpassInputType)
          }} onChange={(event) => {
            setConfirmPass(event.target.value)
          }}>
            {confirmpassInputType ? <AiFillEyeInvisible className='input__icon' /> : <AiFillEye className='input__icon' />}
          </Input>
          <p className='input__error'></p>
        </div>
        <div className='input_field_container'>
          <Input type={"text"} placeholder={"Email"} className={"input-field"} onChange={(event) => {
            setEmail(event.target.value)
          }} />
          <p className='input__error'>{emailError}</p>
        </div>
        <div className='input_field_container'>
          <Input type={"text"} placeholder={"Phone"} className={"input-field"} onChange={(event) => {
            setphone(event.target.value)
          }} />
          <p className='input__error'>{phoneError}</p>
        </div>
        <div className='login__form-button-cont'>
          {
            !showloading ?
              <Button type={'blue-btn'} inner={"Sign Up"} onClick={requestSignUp} /> :
              <Button type={'blue-btn'} inner={"Loading..."} />
          }
          <Link to="/auth/login ">
            <Button type={'bordered-blue'} inner={"Sign In"} onClick={() => { console.log('hhelo') }} />
          </Link>
        </div>
      </div>
    </>
  )
}
