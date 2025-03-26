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
        <input type="text" onChange={(e) => setColor(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <p ref={msgRef}>Hello World</p>
    </div>
  )
}
