import React from "react";
// components
import { Button } from "../utility/Button.js"

/*
props = {
    src - string/variable - represent the image of the course
    CourseTitle - string - represent the title of the course
    keypoints - array - represent the list of the keypoints in the information tab
}
*/

export const Courseitem = (props) => {

    function makeCourseitemBlur(event) {
        var targetelement = event.currentTarget.childNodes[0].childNodes[1]
        targetelement.classList.remove('courseitem-blur')
        targetelement.classList.remove('courseitem-dimmer')
        targetelement.classList.add('courseitem-darker')
    }
    
    function makeCourseitemUnblur(event) {
        var targetelement = event.currentTarget.childNodes[0].childNodes[1]
        targetelement.classList.add('courseitem-blur')
        targetelement.classList.remove('courseitem-darker')
        targetelement.classList.add('courseitem-dimmer')
    }

    return (
        <div className="courseitem__container"  onMouseEnter={makeCourseitemBlur} onMouseLeave={makeCourseitemUnblur}>
            <div className="courseitem__imagecont">
                <img src={props.src} className='courseitem__img'/>
                <div className="courseitem__img-overlay courseitem-blur courseitem-dimmer" ></div>
            </div>
            <div className="courseitem__infocont">
                <div className="courseitem__title">
                    {props.CourseTitle}
                </div>
                <div className="courseitem__keypoints">
                    {props.keypoints.map((element, index) => {
                        return (
                            <li key={index}>{element}</li>
                        )
                    })}
                </div>
                <div className="courseitem__enroll-btncont">
                <Button type='red-btn' inner='Enroll'/>
                </div>
            </div>
        </div>
    )
}