import './styles.css'

import { useState } from 'react'

export const App = () => {
    const [isWriting, setIsWriting] = useState(false);

    const handleChange = (event) => {
        setIsWriting(event.target.value)
    }

    const disabledButton = {
        backgroundColor: isWriting ? 'white' : 'gray',
        cursor: isWriting ? 'pointer' : 'not-allowed',
        border: '2px solid black',
        padding: '8px',
        borderRadius: '10px'
    }

    return (
        <main>
            <h3>Disable Button Challenge</h3>
            <input onChange={handleChange} type="text" />
            <button style={disabledButton}>Submit</button>
        </main>
    );
}