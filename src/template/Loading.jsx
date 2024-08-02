import React from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";

function Loading(props) {
    return (
        <Box className="flex-1 flex flex-col items-center justify-center h-[100vh] w-[100vw] overflow-hidden" sx={{bgcolor: "background.default"}}>
            <CircularProgress />
            <Typography color="primary" fontSize={26}>Loading</Typography>
        </Box>
    );
}

export default Loading;