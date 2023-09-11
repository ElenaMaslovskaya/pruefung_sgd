import React, { useState } from "react";
import './PrimeNumberChecker.css'

const PrimeNumberChecker = () => {

    const [number, setNumber] = useState(null);
    const [isPrime, setIsPrime] = useState(null);
    const [firstDivider, setFirstDivider] = useState(null);

    function checkPrime() {
        const num = parseInt(number);

        if (num <= 1) {
            setIsPrime(false);
            setFirstDivider(null);
            return;
        }

        if (num === 2 || num === 3) {
            setIsPrime(true);
            setFirstDivider(null);
            return;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) {
                setIsPrime(false);
                setFirstDivider(i);
                return;
            }

            setIsPrime(true);
            setFirstDivider(null);
        }
    }

    const isResultVisible = isPrime !== null;

    return (
        <div>
            <h1>Primzahlprüfer</h1>
            <input
                type="number"
                placeholder="Geben Sie eine Zahl ein"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={checkPrime}>Prüfen</button>
            {isResultVisible && (
                <div>
                    {isPrime ? (
                        <p>Die eingegebene Zahl ist eine Primzahl.</p>
                    ) : (
                            <p>Die eingegebene Zahl ist keine Primzahl. Der erste Teiler ist {firstDivider}.</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default PrimeNumberChecker;