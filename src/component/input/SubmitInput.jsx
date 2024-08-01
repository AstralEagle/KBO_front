import React from 'react';
import {Box} from "@mui/material";

function SubmitInput({value, onClick}) {
    return (
        <Box className="rounded-full cursor-pointer px-[20px] h-[30px] flex items-center justify-center shadow-xl " sx={{bgcolor: "primary.main", color: "reversText.primary", "&:hover": {bgcolor: "primary.light"} }} onClick={onClick}>
            {value}
        </Box>
    );
}

export default SubmitInput;