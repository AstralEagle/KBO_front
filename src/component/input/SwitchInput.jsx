import React from 'react';
import {Box, Switch, Typography} from "@mui/material";

function SwitchInput({value, setValue, label}) {
    return (
        <Box className="flex items-center gap-[5px]">
            <Switch sx={{
                    width: 65,
                '& .MuiSwitch-track': {
                borderRadius: 22 / 2,
                height: 20,
            },
                '& .MuiSwitch-thumb': {
                boxShadow: 'none',
                width: 18,
                height: 18,
                margin: "4px",
            },
            }} onChange={(event) => setValue(event.target.checked)} checked={value} />
                <Typography>{label}</Typography>
</Box>
)
    ;
}

export default SwitchInput;