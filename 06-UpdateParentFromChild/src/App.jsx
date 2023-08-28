import "./styles.css"

import { useState } from "react"

export const App = () => {
    const [value, setValue] = useState("I need to be updated from my Child")

    const handleValue = () => {
        setValue("It's updated right now!")
    }

    const Child = () => {
        return (
            <>
                <h2>Child</h2>
                <button onClick={handleValue}>Child Button</button>
            </>
        )
    }

    return (
        <main>
            <h3>Update Parent State Challenge (Using Callback)</h3>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
            </div>

            <div className="wrapper">
                <Child />
            </div>
        </main>
    )
}