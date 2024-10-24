import { FaEye, FaPen, FaTrash } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import Modal from "./Modal"
import { Fragment, useState } from "react"
import toast from "react-hot-toast"

const TaskList = ({ type, todoList, setTodoList, handleStatus, handleRemove }) => { // type Completed, Pending
    
    const [openedModal, setOpenedModal] = useState(null)

    // if (openedModal) {
    //     return "Hi"
    // }

    const [editText, setEditText] = useState("")
    const [editableItem, setEditableItem] = useState("")

    const handleEdit = (item) => {
        setEditText(item.task)
        setEditableItem(item)
    }

    const handleUpdate = (item) => {
        const exist = todoList.find(todo => editText.trim() == todo.task && todo.id != item.id)
        if (exist) {
            return toast.error("Already exist")
        }
        const res = todoList.map(todo => {
            if (todo.id == item.id) {
                return { ...todo, task: editText.trim() }
            }
            return todo
        })
        setTodoList(res)
        setEditText("")
        setEditableItem("")
    }

    return <div className="d-flex flex-column align-items-center gap-2 mt-3">
        {openedModal && <Modal item={openedModal} setOpenedModal={setOpenedModal} />} {/* conditional rendering */}
        <h2>{type} Tasks ({todoList.filter(todo => todo.status == type).length})</h2>
        {
            todoList.filter(todo => todo.status == type).map((todo) => {
                return <div key={todo.id} className="p-2 text-start w-50 text-light bg-secondary d-flex ">
                    <div className="w-100">
                      
                        <div>TASK: {editableItem.id == todo.id ? <Fragment>
                            <input type="text" value={editText} onChange={(event) => setEditText(event.target.value)} />
                            <button onClick={() => handleUpdate(todo)}>Update</button>
                        </Fragment> : todo.task}</div>
                        <div>STATUS: {todo.status}</div>
                        
                    </div>
                    <div className="d-flex flex-column justify-content-end gap-2">
                        <FaCircleCheck cursor={"pointer"} onClick={() => handleStatus(todo.id)}/>
                        <FaTrash cursor={"pointer"} onClick={() => handleRemove(todo.id)}/>
                        <FaEye cursor={"pointer"} onClick={() => setOpenedModal(todo)} />
                        <FaPen cursor={"pointer"} onClick={() => handleEdit(todo)} />
                    </div>
                </div>
            })
        }
    </div>
}

export default TaskList