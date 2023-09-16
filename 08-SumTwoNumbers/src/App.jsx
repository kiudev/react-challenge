import './styles.css'

import { useState } from 'react'

export const App = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [total, setTotal] = useState(0)

    const totalSum = () => {
        setTotal(number1 + number2)
    }

    return (
        <div>
            <h2>Adding Two Numbers</h2>

            <input
                placeholder="First Number"
                type="text"
                onChange={num1 => setNumber1(+num1.target.value)}
                value={number1}
            />
            <input
                placeholder="Second Number"
                type="text"
                onChange={num2 => setNumber2(+num2.target.value)}
                value={number2}
            />

            <button onClick={totalSum}>Add Two Numbers</button>

            <p>Total: {total}</p>
        </div>
    )
}
