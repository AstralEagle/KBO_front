import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./reducers/themeReducer.js";

export default configureStore({
    reducer: {
        darkMode: themeReducer,

    },
})