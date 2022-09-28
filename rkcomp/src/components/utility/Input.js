import React from 'react'
// stylesheets
import "../../stylesheets/utility.css"
// hooks
import { useState } from 'react'

export const Input = (props) => {
  // props = {
  //      type : string - set the type of input field
  //      placeholder : string - set the placeholder of input field 
  //      children : an icon to render beside the input field
  //      id : string
  //      onChange : function
  //      onClick: function this will determine the function of the icon that is beside the input field
  //      value : string
  // }

  function renderIcon() {
    if (props.children === undefined) {
      return null
    }
    else {
      return (
        <div className='input__icon-cont' onClick={props.onClick}>
          {props.children}
        </div>
      )
    }
  }

  return (
    <>
      <div className='input__field-cont'>
        <input type={props.type} placeholder={props.placeholder} className={props.className} id={props.id} onChange={props.onChange} value={props.value} />
        {renderIcon()}
      </div>
    </>
  )

}
