import React from 'react'
// components
import { Button } from '../utility/Button.js'
// stylesheet
import "../../stylesheets/home.css"

export const Service = () => {
  return (
    <>
        <section className='home__services-section'>
          <div className='home__services-cont'>
            <div>
              <p className='home__services-heading'>Our services</p>
              <div className='home__services'>
                <div className='home__service-item'>
                  <p>Computer Traning</p>
                  <p>
                    Learn Computer Basics and
                    Advanced technical concepts used in industries
                    with the best technical trainers.
                  </p>
                  <Button type='green-btn' inner='Know More' />
                </div>
                <div className='home__service-item'>
                  <p>Library</p>
                  <p>
                    Well Furnished and Fully Air conditioned
                    Library with 30 sitting capacity and fast internet
                    Wi-Fi Power Backup and Many more
                  </p>
                  <Button type='green-btn' inner='Book Seat' />
                </div>
              </div>
            </div>
          </div>
          <div className='home__services-overlay'></div>
        </section>
    </>
  )
}
