import React from 'react'
import { Event } from '../Event'
import styles from './EventList.module.css'

export default function EventList(props:{events:Event[], handleDelete:Function}) {
  return (
    <div>
        { props.events.map((event,index) => (
          <div key={event.id} className={styles.card}>
            <h2>{index+1} - {event.title}</h2>
            <button onClick={ () => props.handleDelete(event.id) }>Delete Event</button>
          </div>
        ))}
    </div>
  )
}
