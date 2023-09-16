import './styles.css'

import { useState, useEffect } from 'react'

export const App = () => {
    const [userData, setUserData] = useState({})

    const url = 'https://jsonplaceholder.typicode.com/users/1'

    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setUserData(data)
        }
        getUserData()
    }, [])

    return (
        <div className="App">
            <h2>User Data</h2>
            <p>
                <strong>Name: </strong>{' '}
                {userData.name || '(Need to populate name here)'}
            </p>
            <p>
                <strong>Website: </strong>
                {userData.website || '(Need to populate website here)'}
            </p>
            <p>
                <strong>Email: </strong>
                {userData.email || '(Need to populate email here)'}
            </p>
            <p>
                <strong>Phone: </strong>
                {userData.phone || '(Need to populate phone here)'}
            </p>
        </div>
    )
}
