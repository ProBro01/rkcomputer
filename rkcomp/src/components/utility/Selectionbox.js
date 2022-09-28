import React from 'react'
// components
import { AiOutlineCaretDown } from "react-icons/ai"
// hooks
import { useState, useEffect } from 'react'

/*
    props = {
        placeholder : string - showing what to show when there is no selection
        selectionlist : array - contains the list of all selection menu

    }
*/


export const Selectionbox = (props) => {

    const [showlist, setshowlist] = useState(false)
    const [selected, setselected] = useState(props.placeholder)

    function selectionList(event) {
        setshowlist(!showlist)
        setTimeout(() => {
            var callback = (event) => {
                setshowlist(false)
                window.removeEventListener('click', callback)
            }
            window.addEventListener('click', callback)
        }, 100)
    }

    function nameSetter(event) {
        setselected(event.target.getAttribute('value'))
    }

    return (
        <div className='selection__container'>
            <div className='selection__bar' onClick={selectionList}>
                <p>{selected}</p>
                <div>
                    <AiOutlineCaretDown className='selection__drop-icon' />
                </div>
            </div>
            {showlist ? <ul className='selection__list-container'>
                {props.selectionlist.map((element, index) => {
                    return (
                        <li key={index} onClick={nameSetter} value={element}>{element}</li>
                    )
                })}
            </ul> : null}
        </div>
    )
}
