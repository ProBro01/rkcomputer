import React, { useState, useEffect } from 'react'
// components
import { Input } from '../utility/Input.js'
import { Selectionbox } from '../utility/Selectionbox.js'
import { Radiobutton } from '../utility/Radiobutton.js'
import { BsPlusLg, BsArrowRight } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"
import { Button } from '../utility/Button.js'
// hooks
import { useSelector, useDispatch } from 'react-redux'
// actions
import { proficencyaction } from "../../action/userinfoaction.js"
// stylesheets
import "../../stylesheets/userinfo.css"

export const UserInformation = () => {

    const [tagvalue, settagvalue] = useState('')

    const proficency_tag_list = useSelector(state => state.proficency_reducer)

    const changeGenderopt = (event) => {
        if (event.target.classList[0] === 'radiobutton__lable') {
            var eventElement = event.target.parentElement
        }
        else {
            var eventElement = event.target
        }
        var radiobuttons = document.querySelectorAll(`div[category_name="${eventElement.getAttribute('category_name')}"]`)
        for (var i = 0; i < radiobuttons.length; i++) {

        }
    }

    function tagAdder(event) {
        if (tagvalue.length !== 0) {
            dispatch(proficencyaction('addtag', tagvalue))
            settagvalue('')
        }
    }

    function tagRemover(event) {
        dispatch(proficencyaction('removetag', event.currentTarget.getAttribute('value')))
    }

    const dispatch = useDispatch()

    return (
        <div className="login-form">
            <h1 className='heading'>Fill Your Details...</h1>
            <div className='userinfo__selectionbox'>
                <Selectionbox placeholder={'Intrested Courses...'} selectionlist={['Python', 'Web Development', 'Android Development', 'C programming', 'Python - Game Development']} />
            </div>
            <div className='userinfo__address-cont'>
                <p>Address</p>
                <Input className='input-field' placeholder='City' />
                <Input className='input-field' placeholder='State' />
                <Input className='input-field' placeholder='Country' />
            </div>
            <div className='userinfo__gender-cont'>
                <p>Gender</p>
                <Radiobutton lable={"Male"} value="male" category_name="gender" />
                <Radiobutton lable={"Female"} value="female" category_name="gender" />
            </div>
            <div className='userinfo__proficient-skill'>
                <Input type='text' placeholder='Proficient Skill' className='input-field' onClick={tagAdder} onChange={(event) => {
                    settagvalue(event.target.value)
                }} value={tagvalue}>
                    <BsPlusLg className='input__icon' />
                </Input>
                <div className='userinfo__proficiency-tag-cont'>
                    {proficency_tag_list.map((element) => {
                        return (
                            <div className='userinfo__proficiency-tag'>
                                <div>
                                    {element}
                                </div>
                                <div onClick={tagRemover} value={element}>
                                    <AiFillCloseCircle />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='userinfo__buttons'>
                <Button type='blue-btn' inner={`Continue`} />
                <p>Skip<BsArrowRight /></p>
            </div>
        </div>
    )
}
