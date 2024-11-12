
const Modal = ({ item, setOpenedModal }) => {
    return (
        <div className="position-fixed d-flex align-items-center justify-content-center top-0 start-0 bg-dark bg-opacity-50" style={{height: "100vh", width: "100vw"}}>
            <div>
                <div className="bg-dark text-light p-2">
                    {item.title}
                    <button onClick={() => setOpenedModal(null)}>close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
