import React from "react";
// import "./App8.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App8() {
    const [amount, setAmount] = useState([]);
    const [value, setValue] = useState("");
    const [total, setTotal] = useState(0);
    const handleAdd = () => {
        setAmount([...amount, value]);
        setValue("");
    }
    useEffect(() => {
        setTotal(amount.reduce((s, value) => s + Number(value), 0));
    }, [amount]);
    return (
        <div>
            <div>
                <input type="number" onChange={(e) => setValue(e.target.value)} placeholder="Enter amount"></input>
                <button onClick={handleAdd}>Add</button>
                <hr />
                {amount.map(value => (
                    <div>{value}</div>
                ))}
                {/* Total: {amount.reduce((acc, value) => acc + Number(value), 0)}<br /> */}
                Total: {total}<br />
                <button onClick={() => setAmount([])}>Clear</button>
            </div>
            <div>

            </div>
        </div>
    )
}