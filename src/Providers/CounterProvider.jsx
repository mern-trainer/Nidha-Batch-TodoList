import { createContext, useContext, useState } from "react";

const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    
    const [counter, setCounter] = useState(0)

    const contextValues = {
        counter, setCounter
    }

    return <CounterContext.Provider value={contextValues}>
        { children }
    </CounterContext.Provider>
}

// custom hooks

export const useCounter = () => {
    return useContext(CounterContext)
}