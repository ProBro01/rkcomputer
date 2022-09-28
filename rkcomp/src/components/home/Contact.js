import React from 'react'
// components
import { Button } from '../utility/Button.js'
import { Input } from '../utility/Input.js'
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
// stylesheet
import "../../stylesheets/home.css"
// hooks
import { useState } from 'react'

export const Contact = () => {
    const [contacttext, setcontacttext] = useState('')

    return (
        <>
            <section className='home__contact-section'>
                <div className='home__contact-cont'>
                    <div className='home__contact-tray'>
                        <p>Contact us</p>
                        <div className='home__contact-input-cont'>
                            <div className='home__contact-input'>
                                <Input className='input-field' type='text' placeholder='Email'>
                                    <AiOutlineMail className='home__contact-icon' />
                                </Input>
                                <Input type='text' className='input-field' placeholder='Contact No.'>
                                    <BsFillTelephoneFill className='home__contact-icon' />
                                </Input>
                            </div>
                            <textarea className='home__contact-textarea' placeholder='write your Description...' value={contacttext} onChange={(event) => {
                                setcontacttext(event.target.value)
                            }}>
                            </textarea>
                        </div>
                        <div className='home__contact-button-cont'>
                            <Button type='green-btn' inner='Submit' />
                        </div>
                        <div className='home__contact-info-cont'>
                            <div className='home__contact-info-email'>
                                <AiOutlineMail /><span>rkyadavalwar@gmail.com</span>
                            </div>
                            <div className='home__contact-info-phone'>
                                <BsFillTelephoneFill /><span>+91-9887781426</span>
                            </div>
                            <div className='home__contact-info-location'>
                                <GoLocation /><span>109 Shivaji park Alwar, Rajasthan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
