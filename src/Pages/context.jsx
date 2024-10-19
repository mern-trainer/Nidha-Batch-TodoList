// context api => global state management
// 1. create a new context [createContext()]
// 2. create states
// 3. useContext()

import { useCounter } from "../Providers/CounterProvider"


const Context = () => {

    const { counter, setCounter } = useCounter()

    return (
        <div className="d-flex align-items-center gap-3 mt-5 flex-column">
            <div>{counter}</div>
            <div className="d-flex gap-3 justify-content-center">
                <button onClick={() => setCounter(counter + 1)} className="btn btn-primary rounded">Increment</button>
                <button onClick={() => setCounter(counter - 1)} className="btn btn-danger rounded">Decrement</button>
            </div>
        </div>
    )
}

export default Context
