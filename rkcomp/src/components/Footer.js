import React from 'react'
// components
import { 
  AiOutlineTwitter,
  AiFillLinkedin
 } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"

// stylesheets
import "../stylesheets/navbar.css"

export const Footer = () => {
  return (
    <div className='footer__container'>
      <p>
        RK Computers
      </p>
      <div className='footer__social-media-icons'>
        <AiOutlineTwitter className='social-icon'/>
        <ImInstagram className='social-icon'/>
        <FaFacebookF className='social-icon'/>
        <AiFillLinkedin className='social-icon'/>
      </div>
      <div className='footer__copyright'>
      &#169;2022 - Rk Computer | All right reserved
      </div>
    </div>
  )
}
