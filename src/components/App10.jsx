// import React from 'react'
// import "./App10.css";
// import { useState } from 'react';
// // import { useEffect } from 'react';
// export default function App10() {
//     const [score, setScore] = useState(0);
//     const [wickets, setWickets] = useState(0);
//     const [msg,setMsg] = useState('');
    
//     const handleRun = () => {
//         setScore(score + 1);
//         setMsg('Well Done!');
//     }
//     const handleWicket = () => {
//         setWickets(wickets + 1);
//         setMsg('Better Luck Next Time!');
//         if(wickets === 9){
//             setMsg('Game Over!');
//         }
//     }
//   return (
//     <div>
//         <div style={{textAlign: 'center'}}>
//             <h2>Cricket Game</h2>
//             <hr />
//         </div>
//         <div style={{textAlign: "center"}}>
//             <h3>Score-Board</h3>
//             <p>Score: {score}</p>
//             <p>Wickets: {wickets}</p>
//         </div>
//         <div style={{textAlign: "center"}}>
//             <button onClick={handleRun}>RUN</button>
//             <button onClick={handleWicket}>WICKET</button>
//             <p><button onClick={() => {setScore(0); setWickets(0); setMsg('');}}>RESET</button></p>
//             <hr />
//         </div>
//         <div style={{textAlign: "center", color: 'red'}}>
//             <p>{msg}</p>
//         </div>
//     </div>
//   )
// }

import React from 'react'
import "./App10.css";
import { useState } from 'react';

export default function App10() {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [msg, setMsg] = useState('');
    const [showRunButtons, setShowRunButtons] = useState(false);

    const handleRun = () => {
        setShowRunButtons(true);
        setTimeout(() => {
            setShowRunButtons(false);
        }, 3000);
    }

    const handleRunScore = (runs) => {
        setScore(score + runs);
        setMsg('Well Done!');
        setTimeout(() => {
            setMsg('');
        }, 1000);
    }

    const handleWicket = () => {
        setWickets(wickets + 1);
        setMsg('Better Luck Next Time!');
        setTimeout(() => {
            setMsg('');
        }, 2000);
        if (wickets === 9) {
            setMsg('Game Over!');
        }
    }

    return (
        <div>
            <div className='App-Container'>
                <h2>Cricket Game</h2>
            </div>
            <div className='App-Row'>
                <h3>Score-Board</h3>
            </div>
            <div className='App-Row'>
                <p>Score: {score}</p>
                <p>Wickets: {wickets}</p>
            </div>
            <div className='App-Box'>
                <button onClick={handleRun}>RUN</button>
                {showRunButtons && (
                    <div>
                        <button onClick={() => handleRunScore(1)}>1</button>
                        <button onClick={() => handleRunScore(2)}>2</button>
                        <button onClick={() => handleRunScore(3)}>3</button>
                        <button onClick={() => handleRunScore(4)}>4</button>
                        <button onClick={() => handleRunScore(6)}>6</button>
                    </div>
                )}
                <button onClick={handleWicket}>WICKET</button>
                <button onClick={() => { setScore(0); setWickets(0); setMsg(''); setShowRunButtons(false); }}>RESET</button>
            </div>
            <div className='App-Msg'>
                <p>{msg}</p>
            </div>
        </div>
    )
}
