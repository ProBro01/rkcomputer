import React from 'react'

export const Button = (props) => {
    // props = {
    //      type : give the class of the button 
    //              ['blue-btn', 'bordered-blue', 'green-btn', 'bordered-green']
    //      onClick : and function for onclick event listener
    //      inner : text written inside button
    // }
    return (
        <>
            <button className={`btn ${props.type}`} onClick={props.onClick}>{props.inner}</button>
        </>
    )
}
