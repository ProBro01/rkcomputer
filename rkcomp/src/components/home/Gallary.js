import React from 'react'
// components
import { Rsidearrowbutton, Lsidearrowbutton } from '../utility/Sidearrowbutton'
// images
import gallaryimg1 from "../../assests/gallaryimg1.jpg"
import gallaryimg2 from "../../assests/gallaryimg2.jpg"
import gallaryimg3 from "../../assests/gallaryimg3.jpg"
import g1 from "../../assests/1.jpg"
import g2 from "../../assests/2.jpg"
import g3 from "../../assests/3.jpg"
import g4 from "../../assests/4.jpg"
// stylesheets
import "../../stylesheets/home.css"
// hooks
import { useState, useEffect } from "react"

export const Gallary = () => {

    const [transx, settransx] = useState(0)

    useEffect(() => {
      window.addEventListener('resize', (event) => {
        var w = document.querySelector('.home__gallary-img-cont').offsetWidth
        var widthofImage = (w - 64)/3
        var images = document.querySelectorAll('.home__gallary-img')
        for(var i = 0; i < images.length; i++){
          images[i].style.width = `${widthofImage}px`
        }
      })
    }, [])
  
    useEffect(() => {
      document.querySelector('.home__gallary-img-tray').style.transform = `translateX(${transx}px)`
    }, [transx])
  
    function shiftLeft(event) {
      var w = document.querySelector('.home__gallary-img-cont').offsetWidth
      var widthofImage = (w - 64)/3
      var widthofTray = 192 + (widthofImage * 7)
      var invisibleTrayWidth = Math.abs(w - widthofTray)
      var shiftfactor = widthofImage + 32
      if (transx > -invisibleTrayWidth) {
        settransx(transx - shiftfactor)
      }
    }
  
    function shiftRight(event) {
      var w = document.querySelector('.home__gallary-img-cont').offsetWidth
      console.log(w)
      var widthofImage = (w - 64)/3
      console.log(widthofImage)
      var widthofTray = 192 + (widthofImage * 7)
      var invisibleTrayWidth = Math.abs(w - widthofTray)
      var shiftfactor = widthofImage + 32
      if (transx < 0) {
        settransx(transx + shiftfactor)
      }
    }

    return (
        <>
            <section className='home__gallary-section'>
                <div className='home__gallary-cont'>
                    <p>gallary</p>
                    <div className='home__gallary-scroll-cont'>
                      <Rsidearrowbutton onClick={shiftRight} className='side-button-left'/>
                        <div className='home__gallary-img-cont'>
                            <div className='home__gallary-img-tray'>
                                <img src={gallaryimg1} className='home__gallary-img' />
                                <img src={gallaryimg2} className='home__gallary-img' />
                                <img src={gallaryimg3} className='home__gallary-img' />
                                <img src={g1} className='home__gallary-img' />
                                <img src={g2} className='home__gallary-img' />
                                <img src={g3} className='home__gallary-img' />
                                <img src={g4} className='home__gallary-img' />
                            </div>
                        </div>
                      <Lsidearrowbutton className='side-button-right' onClick={shiftLeft}/>
                    </div>
                </div>
            </section>
        </>
    )
}
