import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";
import theme from "./utils/theme.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SkeletonTemplate from "./template/SkeletonTemplate.jsx";

import routes from "~react-pages"

function App() {
    const mode = useSelector((state) => state.darkMode.value)
    const themeValue = useMemo(() => createTheme(theme(mode)), [mode]);

    const routesValue = createBrowserRouter([
        {
            path: "/",
            element: <SkeletonTemplate/>,
            // On utilsie un plugin react qui va recuperer les fichiers dans le dossier pages et les transfomer en tableau de page pour react router dom
            children: routes
        }
    ])

    return (
        <ThemeProvider theme={themeValue}>
            <RouterProvider router={routesValue}/>
        </ThemeProvider>
    )
}

export default App
