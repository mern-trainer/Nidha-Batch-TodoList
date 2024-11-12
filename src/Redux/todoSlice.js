import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToList: (state, action) => {
            // {id: xxxxxxxxxxx, title: xxxxxxxx, completed: boolean, createdAt: xxxxxxxxxx, updatedAt: xxxxxxxxxxx}
            const { payload } = action
            state.todoList = [payload, ...state.todoList]
        },
        remove: (state, action) => {
            // { id: xxxxxxxxxxx }
            const { id } = action.payload
            state.todoList = state.todoList.filter(item => item.id !== id)
        },
        update: (state, action) => {
            // {id: xxxxxxxxx, title: "xxxxxxxxxxxxx"}
            const { id, title } = action.payload
            console.log(action.payload)
            const dateTime = new Date().toLocaleString("en-IN")
            state.todoList = state.todoList.map(item => {
                if (item.id == id) {
                    return { ...item, title: title, updatedAt: dateTime }
                }
                return item
            })
        },
        updateStatus: (state, action) => {
            // {id: xxxxxxxxx}
            const { id } = action.payload
            const dateTime = new Date().toLocaleString("en-IN")
            state.todoList = state.todoList.map(item => {
                if (item.id == id) {
                    return { ...item, updatedAt: dateTime, status: item.status == "Pending" ? "Completed" : "Pending" }
                }
                return item
            })
        }
    }
})

export const { addToList, remove, update, updateStatus } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice