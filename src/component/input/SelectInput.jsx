import React from 'react';
import {Box} from "@mui/material";

function SelectInput({icon, value, setValue, listSelect, placeholder}) {
    return (
        <Box className="rounded-full flex overflow-hidden items-center h-[30px] gap-[5px] shadow-xl "
             sx={{border: "1px solid", borderColor: "primary.main", width: "150px"}}>
            <Box className="min-w-[28px] h-[30px] flex justify-center items-center"
                 sx={{bgcolor: "primary.main", "& .MuiSvgIcon-root": {color: "white", fontSize: 20}}}>
                {icon}
            </Box>
            <select className="flex-1" value={value} onChange={(e) => setValue(e.target.value)}>
                <option value={null}>--{placeholder}--</option>

                {listSelect.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </Box>
    );
}

export default SelectInput;