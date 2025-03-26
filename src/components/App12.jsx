import React, {useState, useRef, useEffect} from 'react'

export default function App12() {
  const [price, setPrice] = useState(0);
  const previousPrice = useRef(0);
  const priceRef = useRef();
  useEffect(() => {
    if (previousPrice.current > price) {
      priceRef.current.style.color = "red";
    } else {
      priceRef.current.style.color = "green";
    }
    previousPrice.current = price;
  }
  , [price]);

  return (
    <div>
      <h1>App 12</h1>
      <p><input type='number' onChange={(e) => setPrice(e.target.value)}></input></p>
      <h4>Previous Price:{previousPrice.current}</h4>
      <h4 ref={priceRef}>Current Price:{price}</h4>
    </div>
  )
}