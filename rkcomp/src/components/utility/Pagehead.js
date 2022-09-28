import React from 'react'
// stylesheet
import "../../stylesheets/utility.css"

export const Pagehead = (props) => {
  return (
    <div className='course__heading'>
          <p>{props.heading}</p>
        </div>
  )
}
