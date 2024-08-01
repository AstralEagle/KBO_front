import React from 'react';
import {Box, Tooltip, Typography, useTheme} from "@mui/material";

function SocietyCard({society, onClick}) {
    const theme = useTheme()
    return (
        <Box sx={{
            border: "1px solid",
            borderColor: "primary.main",
            bgcolor: "reversText.primary",
            boxShadow: `0 0 19px 4px ${theme.palette.secondary.main}1C`,
        }} className="flex flex-col p-[20px] rounded-[20px] h-[137px] w-[290px] cursor-pointer" onClick={() => onClick(society.code.replaceAll(".",""))}>
            <Box className="flex flex-col">
                <Tooltip title={society.name}>
                    <Typography fontSize={20} fontWeight={800} className="truncate">{society.name}</Typography>
                </Tooltip>
                <Box className="flex justify-between">
                    <Typography color="text.secondary" fontSize={14}>{society.code}</Typography>
                    <Typography>.</Typography>
                </Box>
            </Box>
            <Tooltip title={society.activity}>
                <Typography className="truncate" fontSize={12} color="primary">{society.activity}</Typography>
            </Tooltip>
            <Tooltip title={society.contact.address}>
                <Typography className="truncate">{society.contact.address}</Typography>
            </Tooltip>
        </Box>
    );
}

export default SocietyCard;