import React from 'react'
// components
import { Courseitem } from './Courseitem.js'
import { Button } from '../utility/Button.js'
import { Pagehead } from '../utility/Pagehead.js'
// images
import img1 from "../../assests/tempimages/python.png"
import img2 from "../../assests/tempimages/mysql.png"
import img3 from "../../assests/tempimages/react.png"
// stylesheet
import "../../stylesheets/course.css"

var courses = [
  {
    title: "Basic Courses",
    a: [
      {
        src: img1,
        CourseTitle: 'python',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img2,
        CourseTitle: 'mysql',
        keypoints: ['happy', 'birthday', 'to', 'you']
      }
    ]
  },
  {
    title: "Intermediate Courses",
    a: [
      {
        src: img1,
        CourseTitle: 'python',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img2,
        CourseTitle: 'mysql',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      }
    ]
  },
  {
    title: "Advanced Courses",
    a: [
      {
        src: img1,
        CourseTitle: 'python',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img2,
        CourseTitle: 'mysql',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      }
    ]
  },
  {
    title: "Offers Courses",
    a: [
      {
        src: img1,
        CourseTitle: 'python',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img2,
        CourseTitle: 'mysql',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      },
      {
        src: img3,
        CourseTitle: 'react',
        keypoints: ['happy', 'birthday', 'to', 'you']
      }
    ]
  },
]

export const Course = () => {
  return (
    <>
      <section className='course__section'>
        <Pagehead heading={"OUR COURSES"} />
        <div className='course__itemcont'>
          {Object.keys(courses).map((ele) => {
            return (
              <div className='course-cont'>
                <div className='course__itemlist-heading'>
                  <p>{courses[ele].title}</p>
                </div>
                <div className='course-itemslist'>
                  {
                    courses[ele].a.map((element, index) => {
                      return (
                        <Courseitem key={index} src={element.src} CourseTitle={element.CourseTitle} keypoints={element.keypoints} />
                      )
                    })
                  }
                </div>
                <div className='course__itemlist-button-cont'>
                  <Button type='blue-btn' inner='Show More' />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
