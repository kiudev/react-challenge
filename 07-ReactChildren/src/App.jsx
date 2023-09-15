import "./styles.css"

import { Parent } from "./components/Parent"
import { Child } from "./components/Child"

export const App = () => {
    return (
        <Parent>
            <Child />
        </Parent>
    )
}