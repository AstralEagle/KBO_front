import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./reducers/themeReducer.js";
import userReducer from "./reducers/userReducer.js";

export default configureStore({
    reducer: {
        darkMode: themeReducer,
        user: userReducer,

    },
})