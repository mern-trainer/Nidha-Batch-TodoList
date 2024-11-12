import { Fragment, useState } from "react"
import toast from "react-hot-toast"
import { v4 as uuidv4 } from "uuid"
import { FaCircleCheck, FaTrash } from "react-icons/fa6";
import TaskList from "./TaskList";
import { useDispatch, useSelector } from "react-redux";
import { addToList, remove, update, updateStatus } from "../Redux/todoSlice";

const LearnState = () => {
    
    const { todoList } = useSelector(state => state.todo)

    const [todo, setTodo] = useState("")

    const dispatch = useDispatch()

    const handleAddTask = () => {
        if(todo == ""){
            return toast.error("Task is required!")
        }
        const index = todoList.findIndex(element => element.title.toLowerCase() == todo.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exist")
        }
        const currentDate = new Date().toLocaleString("en-IN").toUpperCase()
        const taskObject = {
            id: uuidv4(),
            title: todo,
            status: "Pending",
            createdAt: currentDate,
            updatedAt: currentDate
        }
        dispatch(addToList(taskObject))
        setTodo("")
    }

    const handleChange = (event) => {
        setTodo(event.target.value.replace(" ", "_"))
    }

    const handleRemove = (id) => {
        dispatch(remove({ id }))
        return toast.success("Task removed")
    }

    const handleStatus = (id) => {
        dispatch(updateStatus({ id }))
    }

    return <Fragment>
        <div className="d-flex flex-column align-items-center mt-4">
            <input type="text" onChange={handleChange} value={todo} className="p-2 w-50 border-1 border-secondary" placeholder="Enter Task..." style={{outline: 0}} name="todo"/>
            <button onClick={handleAddTask} className="btn w-50 btn-secondary rounded-0 mt-2">Add Task</button>
        </div>
        <TaskList
            type={"Pending"}
            handleRemove={handleRemove}
            handleStatus={handleStatus}
        /> 
        <TaskList
            type={"Completed"}
            handleRemove={handleRemove}
            handleStatus={handleStatus}
        />
    </Fragment>
}

export default LearnState