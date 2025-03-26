import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
export default function App9() {
    const [v1,setV1] = useState(0);
    const [v2,setV2] = useState(0);
    const [res, setRes] = useState(0);
    useEffect(() => {
        // const inputs = document.querySelectorAll('input[type="number"]');
        // inputs.forEach(input => {
        //     input.addEventListener('input', () => {
        //         let sum = 0;
        //         inputs.forEach(input => {
        //             sum += parseInt(input.value) || 0;
        //         });
        //         setTotal(sum);
        //     });
        // });
        setRes(Number(v1) + Number(v2));
    }, [v1]);
    useEffect(() => {
        setRes(Number(v1) * Number(v2));
    }, [v2]);
  return (
    <div>
        <p><input type="number" placeholder='Enter number' onChange={(e) => setV1(e.target.value)} /></p>
        <p><input type="number" placeholder='Enter number' onChange={(e) => setV2(e.target.value)} /></p>
        Result: {res}<br />
    </div>
  )
}
