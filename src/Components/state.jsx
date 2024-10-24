import { Fragment, useState } from "react"
import toast from "react-hot-toast"
import { v4 as uuidv4 } from "uuid"
import { FaCircleCheck, FaTrash } from "react-icons/fa6";
import TaskList from "./TaskList";

const LearnState = () => {
    
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("") 

    const handleAddTask = () => {
        if(todo == ""){
            return toast.error("Task is required!")
        }
        const index = todoList.findIndex(element => element.task.toLowerCase() == todo.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exist")
        }
        const currentDate = new Date().toLocaleString("en-IN").toUpperCase()
        const taskObject = {
            id: uuidv4(),
            task: todo,
            status: "Pending",
            createdAt: currentDate,
            updatedAt: currentDate
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
    }

    const handleChange = (event) => {
        setTodo(event.target.value.replace(" ", "_"))
    }

    const handleRemove = (id) => {
        const res = todoList.filter(todo => todo.id != id)
        setTodoList(res)
        return toast.success("Task removed")
    }

    const handleStatus = (id) => {
        const res = todoList.map(todo => {
            if (todo.id == id) {
                return {...todo, status: todo.status == "Pending" ? "Completed" : "Pending"}
            }
            return todo
        })
        setTodoList(res)
    }

    return <Fragment>
        <div className="d-flex flex-column align-items-center mt-4">
            <input type="text" onChange={handleChange} value={todo} className="p-2 w-50 border-1 border-secondary" placeholder="Enter Task..." style={{outline: 0}} name="todo"/>
            <button onClick={handleAddTask} className="btn w-50 btn-secondary rounded-0 mt-2">Add Task</button>
        </div>
        <TaskList
            type={"Pending"}
            todoList={todoList}
            handleRemove={handleRemove}
            handleStatus={handleStatus}
            setTodoList={setTodoList}
        /> 
        <TaskList
            type={"Completed"}
            todoList={todoList}
            handleRemove={handleRemove}
            handleStatus={handleStatus}
            setTodoList={setTodoList}
        />
    </Fragment>
}

export default LearnState