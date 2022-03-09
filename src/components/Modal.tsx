import React from 'react'
import './Modal.css'

export default function Modal(props:any) {
  return (
    <div className='modal-backdrop'>
        <div className="modal" style={{ 
        border: "4px solid", 
        borderColor: props.isSalesModal ? "#ff4500" : "#555",
        textAlign: "center"
      }}>
            {props.children}
        </div>
    </div>
  )
}
