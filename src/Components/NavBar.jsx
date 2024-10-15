
const Navbar = () => {

    const sampleFun = (a, b) => {
        console.log(a, b)
    }

    return <header className="d-flex justify-content-between align-items-center px-3" style={{height: "50px"}}>
        <div className="logo">
            <img src="./logo.png" alt="logo" width={60}/>
        </div>
        <div className="d-flex gap-2">
            <button className="btn">Login</button>
            <button className="btn btn-success">Register</button>
        </div>
    </header>
}

export default Navbar