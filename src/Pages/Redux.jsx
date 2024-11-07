import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../Redux/counterSlice"

const Redux = () => {

    const { counter } = useSelector((state) => state.counter)

    const dispatch = useDispatch() 

    const handleIncrement = () => {
        dispatch(increment(2))
    }

    const handleDecrement = () => {
        dispatch(decrement(2))
    }

    return <div>
        <div>{counter}</div>
        <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
        <button onClick={handleDecrement} className="btn btn-danger">Decrement</button>
    </div>
}

export default Redux
