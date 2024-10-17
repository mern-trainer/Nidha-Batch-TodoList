import { FaEye, FaTrash } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import Modal from "./Modal"
import { useState } from "react"

const TaskList = ({ type, todoList, handleStatus, handleRemove }) => { // type Completed, Pending
    
    const [openedModal, setOpenedModal] = useState(null)

    // if (openedModal) {
    //     return "Hi"
    // }

    return <div className="d-flex flex-column align-items-center gap-2 mt-3">
        {openedModal ? <Modal item={openedModal} setOpenedModal={setOpenedModal} /> : null} {/* conditional rendering */}
        <h2>{type} Tasks ({todoList.filter(todo => todo.status == type).length})</h2>
        {
            todoList.filter(todo => todo.status == type).map((todo) => {
                return <div key={todo.id} className="p-2 text-start w-50 text-light bg-secondary d-flex ">
                    <div className="w-100">
                        {/* <div>ID: {todo.id}</div> */}
                        <div>TASK: {todo.task}</div>
                        <div>STATUS: {todo.status}</div>
                        {/* <div>CREATED: {todo.createdAt}</div>
                        <div>UPDATED: {todo.updatedAt}</div> */}
                    </div>
                    <div className="d-flex flex-column justify-content-end gap-2">
                        <FaCircleCheck cursor={"pointer"} onClick={() => handleStatus(todo.id)}/>
                        <FaTrash cursor={"pointer"} onClick={() => handleRemove(todo.id)}/>
                        <FaEye cursor={"pointer"} onClick={() => setOpenedModal(todo)}/>
                    </div>
                </div>
            })
        }
    </div>
}

export default TaskList