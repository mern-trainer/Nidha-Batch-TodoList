import React, { useEffect, useState } from 'react'

const Events = () => {
    const [axis, setAxis] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setAxis({x: e.pageX, y: e.pageY})
    } 

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    
    return <div style={{ height: "100vh", width: "100vw" }}
        className="bg-dark position-relative">
        <div
            style={{
                width: "10px", height: "10px", position: "absolute",
                left: `${axis.x}px`, top: `${axis.y}px`
            }} className="bg-light rounded-circle"></div>
    </div>
}

export default Events
