import { Link, useNavigate } from "react-router-dom"

const A = () => {

    const redirect = useNavigate()

    return <div>
        <button onClick={() => redirect("/b")}>GO TO B</button>
    </div>
}

export default A
