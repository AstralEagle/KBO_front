import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import {Box, createTheme, ThemeProvider} from "@mui/material";
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
        },
        {
            path: "*",
            element: <Box>404 ERROR</Box>,
        }
    ])

    return (
        <ThemeProvider theme={themeValue}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={routesValue}/>
            </React.Suspense>
        </ThemeProvider>
    )
}

export default App
