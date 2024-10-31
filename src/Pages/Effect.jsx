// useEffect => Hook => side effect => to handle api calling
// useEffect => 3 stages => Mounting, updating, unmounting => Lifecycle

import { useEffect, useState } from "react"

// Mounting => Called after first render, the components DOM is now available
// Updating => Called after the component has updated
// Unmounting => Called before the component is removed from the DOM

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
            }}>Update</button>
        </div>
    </div>
    
    
    
}

export default Effect
