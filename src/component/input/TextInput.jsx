import React from 'react';
import {Box} from "@mui/material";

function TextInput({icon, value, setValue, placeholder, password = false}) {
    return (
        <Box className="rounded-full flex overflow-hidden items-center h-[30px] gap-[5px] shadow-xl bg-white"
             sx={{border: "1px solid", borderColor: "primary.main"}}>
            <Box className="min-w-[28px] h-[30px] flex justify-center items-center"
                 sx={{width: 28, bgcolor: "primary.main", "& .MuiSvgIcon-root": {color: "white", fontSize: 20}}}>
                {icon}
            </Box>
            <input type={password? "password" : "text"} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
        </Box>
    );
}

export default TextInput;