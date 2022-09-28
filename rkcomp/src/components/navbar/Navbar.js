import React, { useEffect } from 'react'
// components
import { Button } from "../utility/Button.js"
import { Link } from 'react-router-dom'
import { Loggedinuseicon } from './Loggedinuseicon.js'
// images
import logo from "../../assests/rklogo.png"
// stylesheets
import "../../stylesheets/navbar.css"
// hooks
import { useSelector } from 'react-redux'

export const Navbar = () => {

    useEffect(() => {
        var navbarscrollhandler = (event) => {
            if (window.scrollY === 0) {
                document.querySelector('.navbar__container').classList.remove('navbar__container-shadow')
            }
            else {
                document.querySelector('.navbar__container').classList.add('navbar__container-shadow')
            }
        }
        window.addEventListener('scroll', navbarscrollhandler)
    }, [])

    const isUserLoginedIn = useSelector((state) => { return state.UserLogin_reducer })
    const loginUserInfo = useSelector((state) => { return state.loginuserinfo_reducer })
    console.log(isUserLoginedIn)


    return (
        <div className='navbar__container'>
            <Link to='/'>
                <img src={logo} className='navbar__logo' />
            </Link>
            <div className='navbar__link-cont'>
                <div className='navbar__links'>
                    <Link to="/" className='navbar__link-item'>Home</Link>
                    <Link to="/course" className='navbar__link-item'>Our Courses</Link>
                    <Link to="/contact" className='navbar__link-item'>Contact</Link>
                    <Link to="/about" className='navbar__link-item'>About</Link>
                </div>
                {isUserLoginedIn ?
                    <Loggedinuseicon /> : <Link to="/auth/login">
                        <Button type='blue-btn' inner="Login" />
                    </Link>
                }
            </div>
        </div>
    )
}
