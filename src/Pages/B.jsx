import { Link, useNavigate } from "react-router-dom"

const B = () => {

    const redirect = useNavigate()

    const handleNavigate = type => {
        if (type == 0) {
            alert("Type is 0")
        } else {
            redirect("/a")
        }
    }

    return <div>
        <button onClick={() => handleNavigate(1)}>Go To A</button>
    </div>
}

export default B
