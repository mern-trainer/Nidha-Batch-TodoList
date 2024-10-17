import { useState } from "react"
import B from "../Components/B"

const A = () => {

    const [counter, setCounter] = useState(10)

    const handleData = (data) => {
        console.log(data)
    }

    return (
        <div>
            Component A
            <B counter={counter} handleData={handleData} /> 
            {/* one way data binding */}
        </div>
    )
}

export default A
