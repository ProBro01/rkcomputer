import React, { useState } from 'react'
// images
import img from "../../assests/1.jpg"

export const Loggedinuseicon = () => {

    const [showMenu, setshowmenu] = useState(false)

  return (
    <div className='loggedinusericon__cont'>
        <div className='loggedinusericon__img-cont' onClick={(event) => {
            setshowmenu(!showMenu)
        }}>
            <img src={img} className='loggedinusericon__image'/>
        </div>
        <div className={`loggedinusericon__menu ${showMenu ? 'show' : 'hide'}`}>
            <li>Your Courses</li>
            <li>Cart</li>
            <li>Dashboard</li>
            <p className='loggedinusericon__logout'>Log Out</p>
        </div>
    </div>
  )
}
