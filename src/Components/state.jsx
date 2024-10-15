import { Fragment, useState } from "react"
import { Stack } from "react-bootstrap"
import toast from "react-hot-toast"
import { v4 as uuidv4 } from "uuid"
import { FaCircleCheck, FaTrash } from "react-icons/fa6";

const LearnState = () => {
    
    // Hooks are functions, to manage state and lifecycle of a component.

    // const obj = { a: 1, b: 2 }
    // const b = {...obj}
    // console.log(b)
    // useState()
    // const [counter, setCounter] = useState({counter1: 0, counter2: 0}) // return value => array

    // const handleIncrement1 = () => {
    //     // counter.counter1 = counter.counter1 + 1
    //     // setCounter({...counter, counter1: counter.counter1 + 1})
    //     setCounter((counter) => ({...counter, counter1: counter.counter1 + 1}))
    // }
    // const handleDecrement1 = () => {
    //     setCounter((counter) => ({...counter, counter1: counter.counter1 - 1}))
    // }
    // const handleIncrement2 = () => {
    //     setCounter((counter) => ({...counter, counter2: counter.counter2 + 1}))
    // }
    // const handleDecrement2 = () => {
    //     setCounter((counter) => ({...counter, counter2: counter.counter2 - 1}))
    // }

    // return <div className="d-flex align-items-center mt-4 flex-column">
    //     <Stack direction="horizontal" gap={3}>
    //         <button onClick={handleIncrement1} className="btn btn-primary">Increment { counter.counter1 }</button>
    //         <button onClick={handleDecrement1} className="btn btn-danger">Decrement { counter.counter1 }</button>
    //     </Stack>
    //     <Stack direction="horizontal" gap={3} className="mt-3">
    //         <button onClick={handleIncrement2} className="btn btn-primary">Increment { counter.counter2 }</button>
    //         <button onClick={handleDecrement2} className="btn btn-danger">Decrement { counter.counter2 }</button>
    //     </Stack>
    // </div>
    
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

    // const array = [1,2,3,4]

    const handleAddTask = () => {
        if(todo == ""){
            return toast.error("Task is required!")
        }
        const index = todoList.findIndex(element => element.task.toLowerCase() == todo.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exist")
        }
        // task, id, status, createdAt, updatedAt
        const currentDate = new Date().toLocaleString("en-IN").toUpperCase()
        const taskObject = {
            id: uuidv4(),
            task: todo,
            status: "Pending", // completed: false
            createdAt: currentDate,
            updatedAt: currentDate
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
    }

    const handleChange = (event) => {
        // console.log(event.target.value)
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
            <button onClick={handleAddTask} className="btn btn-secondary rounded-0 mt-2">Add Task</button>
        </div>
        <div className="d-flex flex-column align-items-center gap-2 mt-3">
            <h2>Pending Tasks ({todoList.filter(todo => todo.status == "Pending").length})</h2>
            {
                todoList.filter(todo => todo.status == "Pending").map((todo) => {
                    return <div key={todo.id} className="p-2 text-start w-50 text-light bg-secondary d-flex ">
                        <div className="w-100">
                            <div>ID: {todo.id}</div>
                            <div>TASK: {todo.task}</div>
                            <div>STATUS: {todo.status}</div>
                            <div>CREATED: {todo.createdAt}</div>
                            <div>UPDATED: {todo.updatedAt}</div>
                        </div>
                        <div className="d-flex flex-column justify-content-end gap-2">
                            <FaCircleCheck cursor={"pointer"} onClick={() => handleStatus(todo.id)}/>
                            <FaTrash cursor={"pointer"} onClick={() => handleRemove(todo.id)}/>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="d-flex flex-column align-items-center gap-2 mt-3">
            <h2>Completed Tasks ({todoList.filter(todo => todo.status == "Completed").length})</h2>
            {
                todoList.filter(todo => todo.status == "Completed").map((todo) => {
                    return <div key={todo.id} className="p-2 text-start w-50 text-light bg-secondary d-flex ">
                        <div className="w-100">
                            <div>ID: {todo.id}</div>
                            <div>TASK: {todo.task}</div>
                            <div>STATUS: {todo.status}</div>
                            <div>CREATED: {todo.createdAt}</div>
                            <div>UPDATED: {todo.updatedAt}</div>
                        </div>
                        <div className="d-flex flex-column justify-content-end gap-2">
                            <FaCircleCheck cursor={"pointer"} onClick={() => handleStatus(todo.id)}/>
                            <FaTrash cursor={"pointer"} onClick={() => handleRemove(todo.id)}/>
                        </div>
                    </div>
                })
            }
        </div>
    </Fragment>
}

export default LearnState