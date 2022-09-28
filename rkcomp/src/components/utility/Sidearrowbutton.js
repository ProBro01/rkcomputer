import React from 'react'
// components
import { IoIosArrowBack } from "react-icons/io" 

export const Rsidearrowbutton = (props) => {

  return (
    <button className={`sidearrow__cont ${props.className}`} onDoubleClick={(event) => {
        console.log('vasdf')
        event.preventDefault()
    }} onClick={props.onClick}>
        <IoIosArrowBack className='rsidearrow' />
    </button>
  )
}

export const Lsidearrowbutton = (props) => {

  return (
    <button className={`sidearrow__cont ${props.className}`} onDoubleClick={(event) => {
        event.preventDefault()
    }} onClick={props.onClick}>
        <IoIosArrowBack className='lsidearrow' />
    </button>
  )
}
