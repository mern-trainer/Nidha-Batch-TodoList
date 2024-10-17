const B = ({ counter, handleData }) => {
    return (
        <div>
            <button onClick={() => handleData("data from child")}>Click</button>
            Component B [{counter}]
        </div>
    )
}

export default B
