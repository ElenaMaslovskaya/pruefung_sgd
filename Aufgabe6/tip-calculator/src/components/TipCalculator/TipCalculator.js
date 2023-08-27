import React, { useState } from "react";
import './TipCalculator.css';

function TipCalculator() {
    const [amount, setAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(5);
    const [total, setTotal] = useState(0);

    const calculateTip = () => {
        const tipAmount = (parseFloat(amount) * tipPercentage) / 100;
        setTotal(parseFloat(amount) + tipAmount);
    }
    return (
        <div className="TipCalculator">
            <h1>Tip Calculator</h1>
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                value={tipPercentage}
                onChange={(e) => setTipPercentage(parseInt(e.target.value))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
            <button onClick={calculateTip}>Calculate</button>
            <p>Total: {total.toFixed(2)}</p>
        </div>
    )
}

export default TipCalculator;