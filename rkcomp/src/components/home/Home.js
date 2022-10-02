import React, { useEffect } from 'react'
// components
import { Button } from "../utility/Button.js"
import { Contact } from './Contact.js'
import { Main } from './Main.js'
import { Gallary } from './Gallary.js'
import { Service } from './Service.js'
import { Course } from './Course.js'
// stylesheets
import "../../stylesheets/home.css"
// hooks

export const Home = () => {

  useEffect(() => {
  }, [])

  return (
    <>
      <div className='home__container'>
        <Main/>
        <Service/>
        <Course/>
        <Gallary/>
        <section className='home__course-calltoactionbar'>
          <div>
            <span>Learn Top Technical Courses today</span>, Django, node, python, data science, SQL, DBMS, Operating System and many more...
          </div>
          <Button type='red-btn' inner='Join Course' />
        </section>
        <Contact/>
      </div>
    </>
  )
}
