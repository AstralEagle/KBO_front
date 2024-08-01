import React from 'react';
import {Box} from "@mui/material";
import {Person} from "@mui/icons-material";

function ProfilInput({onClick}) {
    return (
        <Box className="rounded-full flex justify-center items-center p-[2px] cursor-pointer" sx={{bgcolor: "primary.main", boxShadow: "4px 4px 4px #0000003F", "&:hover": {bgcolor: "primary.light"} }} onClick={onClick}>
            <Person fontSize="large" sx={{color: "#fff"}} />
        </Box>
    );
}

export default ProfilInput;