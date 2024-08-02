import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
    },
    reducers: {
        userLogin: (state, action) => {
            state.value = action.payload
        },
        userLogout: (state) => {
            state.value = null
        }
    },
})

export const { userLogin, userLogout } = counterSlice.actions

export default counterSlice.reducer
