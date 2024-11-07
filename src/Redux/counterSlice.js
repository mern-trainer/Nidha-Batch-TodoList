import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            const num = action.payload
            state.counter += num
        },
        decrement: (state, action) => {
            const num = action.payload
            state.counter -= num
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice





