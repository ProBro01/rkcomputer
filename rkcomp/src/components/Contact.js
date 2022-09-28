import React from 'react'
// components
import { Pagehead } from './utility/Pagehead.js'
import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
// stylesheet
import "../stylesheets/contact.css"

export const Contactpage = () => {
  return (
    <section className='contact__section'>
      <Pagehead heading='Contact Us' />
      <div className='contact__details-cont'>
        <div className='contact__info-cont'>
          <div className='contact__info-head'>
            <p>Contact Information</p>
            <p>Fill up the form to contact us</p>
          </div>
          <div className='contact__info'>
            <p><span><BsTelephoneFill/></span>+91-9887781426</p>
            <p><span><MdEmail/></span>rkyadavalwar@gmail.com</p>
            <p><span><GoLocation /></span>109 shivaji park alwar(Raj.)</p>
          </div>
          <div className='contact__social-media'>
            <span><BsTwitter/></span>
            <span><FaFacebookF/></span>
            <span><FiInstagram/></span>
            <span><FaLinkedinIn/></span>
          </div>
          <div className='contact__shapes-cont'>
            <div className='contact__green-circle'></div>
            <div className='contact__circle-quadrant' width={"150"} height={"150"}>
            </div>
          </div>
        </div>
        <div className='contact__form-cont'>
          asfasdfasdfa
        </div>
      </div>
      <div className='contact__map_cont'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.620969308775!2d76.61636692222885!3d27.589061097746807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299d1add6a029%3A0xd73e67a376008147!2sRK%20COMPUTERS%20AND%20LIBRARY!5e0!3m2!1sen!2sin!4v1659628060677!5m2!1sen!2sin" height={"600"} width={"400"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='contact__map'></iframe>
      </div>
    </section>
  )
}
