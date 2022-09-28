import React from 'react'
// components
import { Lsidearrowbutton } from '../utility/Sidearrowbutton'
// stylesheet
import "../../stylesheets/home.css"

export const Course = () => {
  return (
    <>
    <section className='home__course-section'>
          <p>our courses</p>
          <div className='home__course-cont'>
            <div className='home__course-item'></div>
            <div className='home__course-item'></div>
            <div className='home__course-item'></div>
            <div className='home__course-item'></div>
          </div>
        </section>
    </>
  )
}
