import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'darkMode',
    initialState: {
        value: false,
    },
    reducers: {
        changeMode: (state) => {
            state.value = !state.value
        },
        defineMode: (state, {payload}) => {
            console.log(payload)
            state.value = payload
        }

    },
})

export const { changeMode, defineMode } = counterSlice.actions

export default counterSlice.reducer
