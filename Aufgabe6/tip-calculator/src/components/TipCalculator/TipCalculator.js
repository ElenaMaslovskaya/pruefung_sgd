import React, { useState } from "react";
import './TipCalculator.css';

const TipCalculator = () => {

    const [amount, setAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(5);
    const [total, setTotal] = useState(0);

    const calculateTip = () => {
        const tipAmount = (parseFloat(amount) * tipPercentage) / 100;
        setTotal(parseFloat(amount) + tipAmount)
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Rechnungsbetrag"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                value={tipPercentage}
                onChange={(e) => setTipPercentage(parseInt(e.target.value))}>
                <option value={5}>5%</option>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
            </select>
            <button onClick={calculateTip}>Berechnen</button>
            <p>Gesamtbetrag: {total.toFixed(2)} EUR</p>
        </div>
    )
}

export default TipCalculator;