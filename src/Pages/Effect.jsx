// useEffect => Hook => side effect => to handle api calling
// useEffect => 3 stages => Mounting, updating, unmounting => Lifecycle

import { useEffect, useState } from "react"

// Mounting => After the initial load => api calling
// Updating => Changes in states, props
// Unmounting => before removing from DOM

const Effect = () => {

    const [counter, setCounter] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000); 

        return () => {
            clearInterval(interval) 
        }
    }, [count])


    return <div className="d-flex align-items-center flex-column mt-4">
        <div>{counter}</div>
        <div>Count: {count}</div>
        <div>
            <button onClick={() => {
                setCount((counter) => counter + 1)
                // setCounter((counter) => counter + 1)
                // setCounter((counter) => counter + 1)
                // setCounter((counter) => counter + 1)
                // setCounter((counter) => counter + 1)
            }}>Update</button>
        </div>
    </div>
    
    
    
}

export default Effect
