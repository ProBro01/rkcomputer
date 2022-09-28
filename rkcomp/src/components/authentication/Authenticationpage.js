import React from 'react'
// images
import logo from "../../assests/logo.png"
import loginpageimage from "../../assests/loginpageimg.png"
// stylesheets
import "../../stylesheets/login.css"
// components
import { Login } from "./Login.js"
import { Signup } from './Signup.js'
import { Otp } from './Otp.js'
import { UserInformation } from "./UserInformation.js"
import { Link } from "react-router-dom"
// hooks
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AuthenticationCover = (props) => {
  return (
    <>
      <div className='login-container'>
        <div className='login-form-cont'>
          <div className='logo-img-container'>
            <Link to='/'>
              <img src={logo} className="logoimg" />
            </Link>
          </div>
          <div className='login__form-container'>
            {props.children}
          </div>
        </div>
        <div className='login-image-container'>
          <div className='login-image-heading'>
            <p className='institue-name'><span>RK COMPUTERS</span></p>
          </div>
          <img src={loginpageimage} className='login-form-img' />
        </div>
      </div>
    </>
  )
}

export const Authenticationpage = () => {
  const location = useLocation()
  const [loca, setloac] = useState(null)

  useEffect(() => {
    var x = location.pathname.split('/')[2]
    var urlarray = ['signup', 'login', 'otp', 'userinfo']
    for(var i = 0; i < urlarray.length; i++){
      if(x === urlarray[i]){
        setloac(urlarray[i])
        break
      }
      else{
        setloac('error')
      }
    }
  }, [location])

  if (loca === 'signup') {
    return (
      <AuthenticationCover>
        <Signup />
      </AuthenticationCover>
    )
  }
  else if (loca === 'login') {
    return (
      <AuthenticationCover>
        <Login />
      </AuthenticationCover>
    )
  }
  else if (loca === 'otp') {
    return (
      <AuthenticationCover>
        <Otp />
      </AuthenticationCover>
    )
  }
  else if (loca === 'userinfo') {
    return (
      <AuthenticationCover>
        <UserInformation />
      </AuthenticationCover>
    )
  }
}