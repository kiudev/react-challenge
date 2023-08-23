import './styles.css'

import { useState } from 'react'

export const App = () => {
    const [character, setCharacter] = useState('')

    const handleChange = (event) => {
        setCharacter(event.target.value)
    }

    return (
        <main>
            <h1>Data Binding Exercise</h1>
            <input type="text" placeholder="Enter Text" onChange={handleChange} />
            <p>{character}</p>
        </main>
    )
}