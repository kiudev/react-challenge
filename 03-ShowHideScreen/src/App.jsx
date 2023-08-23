import { useState } from 'react'

import './styles.css'

export const App = () => {
    const [isVisible, setIsVisible] = useState(true)

    const toggleClick = () => {
        setIsVisible(!isVisible)
    }
    
    return (
        <main>
            <button onClick={toggleClick}>
                Hide Element Below
            </button>
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                Toggle Challenge
            </div>
        </main>
    )
}