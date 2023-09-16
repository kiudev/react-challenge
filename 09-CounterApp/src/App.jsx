import './styles.css'

import { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
