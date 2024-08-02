import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import {Box, createTheme, ThemeProvider, Typography} from "@mui/material";
import theme from "./utils/theme.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SkeletonTemplate from "./template/SkeletonTemplate.jsx";

import routes from "~react-pages"
import Loading from "./template/Loading.jsx";

function App() {
    const mode = useSelector((state) => state.darkMode.value)
    const themeValue = useMemo(() => {
        return createTheme(theme(mode))
    }, [mode]);

    const routesValue = createBrowserRouter([{
        path: "/",
        element:
            <SkeletonTemplate/>, // On utilsie un plugin react qui va recuperer les fichiers dans le dossier pages et les transfomer en tableau de page pour react router dom
        children: [...routes, {
            path: "*",
            element: (
                <Box className="flex-1 flex flex-col items-center justify-center">
                    <Typography color="error" fontWeight={800} fontSize={78}>404</Typography>
                    <Typography color="text.primary" fontWeight={800} fontSize={48}> Page not found</Typography>
                </Box>),
        }]
    },])

    return (<ThemeProvider theme={themeValue}>
        <React.Suspense fallback={<Loading/>}>
            <RouterProvider router={routesValue}/>
        </React.Suspense>
    </ThemeProvider>)
}

export default App
