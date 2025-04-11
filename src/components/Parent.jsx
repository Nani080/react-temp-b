import React from 'react'

export default function Parent(props) {
  return (
    <div>
        <h3>Hello {props.name}</h3>
        <div className='child'>
            {props.children}
        </div>
    </div>
  )
}
