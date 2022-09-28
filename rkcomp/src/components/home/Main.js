import React from 'react'
// component
import { Button } from '../utility/Button.js'
import { BsArrowRight } from "react-icons/bs"
// images
import homemaincomp from "../../assests/computer.png"
// stylesheets
import "../../stylesheets/home.css"

export const Main = () => {
  return (
    <>
        <div className='home__main'>
          <div className='home__main-info'>
            <p className='home__main-info-heading'>Rk computers and library</p>
            <p className='home__main-info-desc'>New way towards experties in advance technologies.</p>
            <div className='home__main-buttons'>
              <Button type="blue-btn" inner="Enroll" />
              <p>Learn More <BsArrowRight /></p>
            </div>
          </div>
          <div className='home__main-image-cont'>
            <img src={homemaincomp} className="home__main-image" />
          </div>
        </div>
    </>
  )
}
