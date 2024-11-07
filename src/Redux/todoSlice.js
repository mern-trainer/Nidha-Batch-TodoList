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

        }
    }
})

export const { addToList, remove, update } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice