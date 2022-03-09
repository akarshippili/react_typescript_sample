import React from 'react'
import './NewEventForm.css'
import { useState } from 'react'
import { Event } from '../Event'

export default function NewEventForm( props:{handleAddEvent: (newEvent:Event) => void}
    ) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // console.log(e.target.value)
    //     setTitle(e.target.value)
    // }

    const reset = ()=>{
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const createdEvent:Event = {
            title: title,
            date: new Date(date),
            id: Math.floor(Math.random() * 1000)
        }
        props.handleAddEvent(createdEvent)
        reset()
    }


  return (
    <div>
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title: </span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>

            <label>
                <span>Event Date: </span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            </label>
            {/* <p onClick={ reset } >Reset Form</p> */}
            <button>Submit</button>
        </form>
    </div>
  )
}
