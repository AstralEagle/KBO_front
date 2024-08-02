import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'darkMode',
    initialState: {
        value: Boolean(localStorage.getItem('mode') === "true") || false,
    },
    reducers: {
        defineMode: (state, {payload}) => {
            localStorage.setItem("mode", payload)
            state.value = payload
        }

    },
})

export const { defineMode } = counterSlice.actions

export default counterSlice.reducer
