// context api => global state management
// 1. create a new context [createContext()]
// 2. create states
// 3. useContext()

import { useContext } from "react"
import { CounterContext } from "../App"

const Context = () => {

    const { counter, setCounter } = useContext(CounterContext)

    return (
        <div className="d-flex justify-content-center mt-5">
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default Context
