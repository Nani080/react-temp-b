import { useState } from "react";
import React, { useRef } from 'react'

export default function App11() {
    const [color, setColor] = useState('');
    const msgRef = useRef();
    const handleSubmit = () => {
        msgRef.current.style.color = color;
    }
  return (
    <div>
        <h2>App11</h2>
        <hr />
        <p>
          <b>This is the explaination of this code:</b>
          <ul>
            <li>Here we are using the useRef hook to get a reference to the DOM element with the ref attribute.</li>
            <li>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).</li>
            <li>The returned object will persist for the full lifetime of the component.</li>
          </ul>
        </p>
        <hr />
        <input type="text" onChange={(e) => setColor(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <p ref={msgRef}>Hello World</p>
    </div>
  )
}
