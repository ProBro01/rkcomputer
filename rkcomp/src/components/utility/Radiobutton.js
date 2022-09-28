import React from "react"   

export const Radiobutton = (props) => {
    /*
        props = {
            lable - string - inner of the radio button
            selected - boolean - tell if the radio button is selected of not
            onClick - event function - tell what to do if we click on the radio button
            value - string - containe the value of the button
        }
    */

    function changeSelection(event) {
        var buttonCategory = event.currentTarget.getAttribute('category_name')
        var currentselectedValue = event.currentTarget.getAttribute('value')
        var allbuttons = document.querySelectorAll(`[category_name="${buttonCategory}"]`)
        for(var i = 0; i < allbuttons.length; i++){
            if(allbuttons[i].getAttribute('value') === currentselectedValue){
                allbuttons[i].classList.remove('unselected')
                allbuttons[i].classList.add('selected')
            }
            else{
                allbuttons[i].classList.remove('selected')
                allbuttons[i].classList.add('unselected')
            }
        }
    }

    return (
        <div className={`radiobutton-container unselected`} onClick={changeSelection} value={props.value} category_name={props.category_name}>
            <div className="radiobutton__circle">
                <div className={`radiobutton__upper_circle-selected`}>
                    <div className={`radiobutton__lower_circle-selected`}></div>
                </div>
            </div>
            <div className="radiobutton__lable">{props.lable}</div>
        </div>
    )
}